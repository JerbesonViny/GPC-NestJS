import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { EventEntity } from './entities/event.entity';

type SearchParams = {
  id?: string;
  userId?: string;
};

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventEntity)
    private eventRepository: Repository<EventEntity>,
  ) {}

  async create(createEventInput: CreateEventInput) {
    const event = this.eventRepository.create({
      userId: createEventInput.userId,
      title: createEventInput.title,
      type_bike: createEventInput.type_bike,
      type_route: createEventInput.type_route,
      meeting: createEventInput.meeting,
      intensity: createEventInput.intensity,
      origin_latitude: createEventInput.origin_latitude,
      origin_longitude: createEventInput.origin_longitude,
      destination_latitude: createEventInput.destination_latitude,
      destination_longitude: createEventInput.destination_longitude,
    });

    return this.eventRepository.save(event);
  }

  async findAll({ userId }: SearchParams) {
    return this.eventRepository.find({
      where: {
        userId,
      },
    });
  }

  findOne({ id }: SearchParams) {
    return this.eventRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update({ id, ...updateEventInput }: UpdateEventInput) {
    const updated = await this.eventRepository.update(id, updateEventInput);

    return await this.eventRepository.findOne({
      where: {
        id,
      },
    });
  }

  async remove({ id }: SearchParams) {
    const removed = await this.eventRepository.delete({ id });

    return removed.affected;
  }
}
