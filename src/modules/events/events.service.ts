import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { EventEntity } from './entities/event.entity';

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

    return await this.eventRepository.save(event);
  }

  findAll() {
    return `This action returns all events`;
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  update(id: number, updateEventInput: UpdateEventInput) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
