# Building Management

I spent approximately 2.5 hours on this project.

## Usage

- Dev server: Run `ng serve`, then navigate to `http://localhost:4200/`.
- Unit tests: Run `ng test`.

## Notes

As instructed I:
- Only used bootstrap 4 as a dependency.
- Used a validation service with the following method: `isValidNickname(nickname: string): Observable<boolean>`.

For the form, I thought it was appropriate to use a form group containing a `formArray`. That's for two reasons:
- This way the form could be extended to have nicknames for each room of the building.
- We can have a variable number of nickname input (1 or many)

I thought I would prevent the user from deleting the last input as it is probably a bad user experience to have an empty form. I did that by disabling the remove button `[disabled]="nicknames.length === 1"`

To fake a real asynchronous validation, I added a delay to the service.

