(() => {
  // No aplicando el principio de responsabilidad única
  type Gender = 'M' | 'F';

  // Alto Acoplamiento

  class Person {
    constructor(
      public firstName: string,
      public lastName: string,
      public gender: Gender,
      public birthDate: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      firstName: string,
      lastName: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(firstName, lastName, gender, birthDate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastFolderOpen: string,
      email: string,
      role: string,
      firstName: string,
      lastName: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(email, role, new Date(), firstName, lastName, gender, birthDate);
    }
  }

  const userSettings = new UserSettings(
    '/urs/home',
    '/development',
    'marcosparella2000@gmail.com',
    'F',
    'Marcos',
    'Parella',
    'M',
    new Date('2000-09-03')
  );

  console.log({ userSettings, credentials: userSettings.checkCredentials() });
})();
