import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemInput, UpdateItemInput } from './dto';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly _itemsRepository: Repository<Item>,
  ) {}

  async create(createItemInput: CreateItemInput): Promise<Item> {
    const newItem = this._itemsRepository.create(createItemInput);
    return await this._itemsRepository.save(newItem);
  }

  findAll(): Promise<Item[]> {
    return this._itemsRepository.find();
  }

  async findOne(id: string): Promise<Item> {
    const item = await this._itemsRepository.findOneBy({ id });
    if (!item) throw new NotFoundException(`Item with id: ${id} not found`);
    return item;
  }

  async update(updateItemInput: UpdateItemInput): Promise<Item> {
    const item = await this._itemsRepository.preload(updateItemInput);

    if (!item)
      throw new NotFoundException(
        `Item with id: ${updateItemInput.id} not found`,
      );
    return this._itemsRepository.save(item);
  }

  async remove(id: string) {
    const item = await this.findOne(id);
    await this._itemsRepository.remove(item);
    return { ...item, id };
  }
}
