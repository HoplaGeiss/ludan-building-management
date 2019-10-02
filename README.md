# Building Management

I spent approximately 2.5 hours on this project.

## Usage

- Dev server: Run `ng serve`, then navigate to `http://localhost:4200/`.
- Unit tests: Run `npm run test`.
- Storybook: Run `npm run storybook`.

## Notes

As instructed I:
- Only used bootstrap 4 as a dependency.
- Used a validation service with the following method: `isValidNickname(nickname: string): Observable<boolean>`.

For the form, I thought it was appropriate to use a form group containing a `formArray`. That's for two reasons:
- This way the form could be extended to have nicknames for each room of the building.
- We can have a variable number of nickname input (1 or many)

I thought I would prevent the user from deleting the last input as it is probably a bad user experience to have an empty form. I did that by disabling the remove button `[disabled]="nicknames.length === 1"`

To fake a real asynchronous validation, I added a delay to the service.


## Updates

I spent an additionnal 2 hours on the project for the refactor.

- Added a script to run the tests with Chrome Headless
- Added Storybook to be able to run components in isolation (I just added the story for `NicknameComponent`) - `npm run storybook`
- Refactored the app to be more modular and to be able to have a `NicknameComponent` that is reusable.

The way I tackled the refactor is to:
- Move the business logic inside `BuildingFormService`.
This service is in charge of initialising the form and also to add and to remove elements from our `FormArray`.
- Create a reusable `NicknameComponent` that takes into input a label and a `FormGroup` and emits add and remove events.

---

In the I quite like the implementation I created as the whole form is controlled from a service, but I am curious to see if that was the expected approach.

If we expect to have a random number of rooms, this could be further extended by having rooms as a `FormArray` of `FormGroup` each calling our `NicknameComponent`.

