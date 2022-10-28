import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EventsService } from './events.service';
import { EventDTO } from './dto/event.dto';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Resolver(() => EventDTO)
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => EventDTO)
  createEvent(@Args('createEventInput') createEventInput: CreateEventInput) {
    return this.eventsService.create(createEventInput);
  }

  @Query(() => [EventDTO], { name: 'events' })
  findAll() {
    return this.eventsService.findAll();
  }

  @Query(() => EventDTO, { name: 'event' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.eventsService.findOne(id);
  }

  @Mutation(() => EventDTO)
  updateEvent(@Args('updateEventInput') updateEventInput: UpdateEventInput) {
    return this.eventsService.update(updateEventInput.id, updateEventInput);
  }

  @Mutation(() => EventDTO)
  removeEvent(@Args('id', { type: () => Int }) id: number) {
    return this.eventsService.remove(id);
  }
}
