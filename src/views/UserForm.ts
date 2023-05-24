import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForms extends View<User, UserProps> {
  constructor(public parent: Element, public model: User) {
    super(parent, model);
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
    console.log('Worked!');
  };

  onSaveClick = (): void => {
    this.model.save();
    console.log('Worked!');
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
      console.log('Worked!');
    }
  };

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <input placeholder="${this.model.get('name')}" />
      <button class="set-name">Click</button>
      <button class="set-age">Set Random Age</button>
      <button class="save-model">Save User</button>
    </div>
    `;
  }
}
