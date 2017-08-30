# nodework
A Node API Example For Web Systems.

**Attention: is under development**


# Requirements #

- [x] **Have node.js / npm installed in your development environment**


# First steps #

Install all dependencies:

```bash
npm install
```

Build your application:

```bash
gulp build
```

And raise the server:

```bash
npm start
```

During development, compile (in real time) your application running command below and keeping opened:
```bash
gulp
```

After create your tests:
```
npm run test
```


# Architecture #

The architecture is based in MVC, Repository Pattern and some others Project/Programming Patterns.

After obtaining the project, you will have the following directory tree:

```
├── tests -> Folder that will have all the test files
├── src   -> Source folder
    ├── controllers   -> Put your controllers here
    ├── exceptions    -> Put your exceptions here
    ├── models        -> Put your models here
    ├── repositories  -> Put your repositories here
    ├── services      -> Put your services here
    ├── types         -> Put your types here
    ├── _core         -> Folder that will have all core files. Be careful!
        ├── controllers
        ├── exceptions
        ├── interfaces
        ├── models
        ├── repositories
```

And inside the src folder we have the file `index.ts`, it's the system bootstrap.


# In development #

The project has the following sample classes:
```
UserDTO             -> Interface
User                -> Implementation of UserDTO
UserController      -> Routes
UserService         -> Intermediate class to Controller and Repository
UserRepositoryRDB   -> Database communication
```

These classes are in their respective folders and referenced in file: `/src/_core/IocContainer.ts` and in some of these others:

```
/types/ControllerTypes.ts
/types/RepositoryTypes.ts
/types/ServiceTypes.ts
```

**Each** controller / service / repository **must be** in these files for dependency injection, via `inversify package`.


# Next implementations #

- [ ] Abstract implementation
    - [x] Controller
    - [x] Service
    - [ ] RepositoryRDB
    - [ ] RepositoryMongo
- [ ] Use more and/or better dependencies 
- [ ] Class generator by command line, including:
    - [ ] Controller
    - [ ] Service
    - [ ] Repository
    - [ ] Configuration in IocContainer
    - [ ] Initial tests
- [ ] Use more and/or better patterns
- [ ] Better tests
- [ ] Better function descriptions

------------

## Special Thanks: ##
- [CEFET/RJ - Nova Friburgo](http://www.cefet-rj.br/index.php/nova-friburgo), by knowledge
- [Tim Whitney](https://www.linkedin.com/in/timwhit/) for creating this post: **[TYPESCRIPT AND NODE.JS ENTERPRISE PATTERNS](https://www.slalom.com/thinking/typescript-nodejs-enterprise-patterns)**
