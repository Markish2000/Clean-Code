(() => {
  // Aplicando el principio de responsabilidad única
  // Prioriza la composición frente a la herencia

  type Gender = 'M' | 'F';

  interface PersonProps {
    birthDate: Date;
    firstName: string;
    gender: Gender;
    lastName: string;
  }

  class Person {
    public birthDate: Date;
    public firstName: string;
    public gender: Gender;
    public lastName: string;

    constructor({ firstName, lastName, gender, birthDate }: PersonProps) {
      this.birthDate = birthDate;
      this.firstName = firstName;
      this.gender = gender;
      this.lastName = lastName;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    private lastAccess: Date;

    public email: string;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastFolderOpen: string;
    workingDirectory: string;
  }

  class Settings {
    public lastFolderOpen: string;
    public workingDirectory: string;

    constructor({ workingDirectory, lastFolderOpen }: SettingsProps) {
      this.lastFolderOpen = lastFolderOpen;
      this.workingDirectory = workingDirectory;
    }
  }

  // Nuevo User Settings
  interface UserSettingsProps {
    birthDate: Date;
    email: string;
    firstName: string;
    gender: Gender;
    lastFolderOpen: string;
    lastName: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      birthDate,
      email,
      firstName,
      gender,
      lastFolderOpen,
      lastName,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ firstName, lastName, gender, birthDate });
      this.settings = new Settings({ workingDirectory, lastFolderOpen });
      this.user = new User({ email, role });
    }
  }

  const userSettings = new UserSettings({
    birthDate: new Date('2000-09-03'),
    email: 'marcosparella2000@gmail.com',
    firstName: 'Marcos',
    gender: 'M',
    lastFolderOpen: '/home',
    lastName: 'Parella',
    role: 'Admin',
    workingDirectory: '/usr/home',
  });

  console.log({
    userSettings,
    credentials: userSettings.user.checkCredentials(),
  });
})();
