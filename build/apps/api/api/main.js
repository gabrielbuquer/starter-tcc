/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = [
    ,
    /* 0 */ /* 1 */
    /***/ (module) => {
      module.exports = require('@nestjs/common');

      /***/
    },
    /* 2 */
    /***/ (module) => {
      module.exports = require('@nestjs/core');

      /***/
    },
    /* 3 */
    /***/ (module) => {
      module.exports = require('@nestjs/swagger');

      /***/
    },
    /* 4 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AppModule = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const typeorm_1 = __webpack_require__(6);
      const app_controller_1 = __webpack_require__(7);
      const app_service_1 = __webpack_require__(8);
      const auth_module_1 = __webpack_require__(9);
      const user_entity_1 = __webpack_require__(15);
      const student_module_1 = __webpack_require__(22);
      const classroom_module_1 = __webpack_require__(24);
      const classroom_entity_1 = __webpack_require__(16);
      const student_entity_1 = __webpack_require__(14);
      const course_module_1 = __webpack_require__(23);
      const course_entity_1 = __webpack_require__(34);
      const lesson_entity_1 = __webpack_require__(35);
      const classroom_course_1 = __webpack_require__(40);
      const student_lesson_1 = __webpack_require__(38);
      const registration_entity_1 = __webpack_require__(37);
      const finances_module_1 = __webpack_require__(52);
      const category_entity_1 = __webpack_require__(55);
      const transaction_entity_1 = __webpack_require__(57);
      const goal_entity_1 = tslib_1.__importDefault(__webpack_require__(56));
      let AppModule = class AppModule {};
      exports.AppModule = AppModule;
      exports.AppModule = AppModule = tslib_1.__decorate(
        [
          (0, common_1.Module)({
            imports: [
              typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                password: 'postgres',
                username: 'postgres',
                entities: [
                  classroom_entity_1.Classroom,
                  user_entity_1.User,
                  student_entity_1.Student,
                  course_entity_1.Course,
                  lesson_entity_1.Lesson,
                  classroom_course_1.ClassroomCourser,
                  student_lesson_1.StudentLesson,
                  registration_entity_1.Registration,
                  category_entity_1.Category,
                  transaction_entity_1.Transaction,
                  goal_entity_1.default,
                ],
                database: 'monetix',
                synchronize: true,
                logging: true,
              }),
              auth_module_1.AuthModule,
              student_module_1.StudentModule,
              classroom_module_1.ClassroomModule,
              course_module_1.CourseModule,
              finances_module_1.FinancesModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService],
          }),
        ],
        AppModule,
      );

      /***/
    },
    /* 5 */
    /***/ (module) => {
      module.exports = require('tslib');

      /***/
    },
    /* 6 */
    /***/ (module) => {
      module.exports = require('@nestjs/typeorm');

      /***/
    },
    /* 7 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AppController = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const app_service_1 = __webpack_require__(8);
      let AppController = class AppController {
        constructor(appService) {
          this.appService = appService;
        }
        getData() {
          return this.appService.getData();
        }
      };
      exports.AppController = AppController;
      tslib_1.__decorate(
        [
          (0, common_1.Get)('/api'),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', []),
          tslib_1.__metadata('design:returntype', void 0),
        ],
        AppController.prototype,
        'getData',
        null,
      );
      exports.AppController = AppController = tslib_1.__decorate(
        [
          (0, common_1.Controller)(),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_a =
              typeof app_service_1.AppService !== 'undefined' &&
              app_service_1.AppService) === 'function'
              ? _a
              : Object,
          ]),
        ],
        AppController,
      );

      /***/
    },
    /* 8 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AppService = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      let AppService = class AppService {
        getData() {
          return { message: 'Hello API' };
        }
      };
      exports.AppService = AppService;
      exports.AppService = AppService = tslib_1.__decorate(
        [(0, common_1.Injectable)()],
        AppService,
      );

      /***/
    },
    /* 9 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AuthModule = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const auth_service_1 = __webpack_require__(10);
      const jwt_1 = __webpack_require__(11);
      const auth_controller_1 = __webpack_require__(17);
      const constants_1 = __webpack_require__(21);
      const typeorm_1 = __webpack_require__(6);
      const user_entity_1 = __webpack_require__(15);
      let AuthModule = class AuthModule {};
      exports.AuthModule = AuthModule;
      exports.AuthModule = AuthModule = tslib_1.__decorate(
        [
          (0, common_1.Module)({
            imports: [
              typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
              jwt_1.JwtModule.register({
                global: true,
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '60s' },
              }),
            ],
            providers: [auth_service_1.AuthService],
            controllers: [auth_controller_1.AuthController],
            exports: [auth_service_1.AuthService],
          }),
        ],
        AuthModule,
      );

      /***/
    },
    /* 10 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a, _b;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AuthService = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const jwt_1 = __webpack_require__(11);
      const typeorm_1 = __webpack_require__(6);
      const typeorm_2 = __webpack_require__(12);
      const bcrypt = tslib_1.__importStar(__webpack_require__(13));
      const student_entity_1 = __webpack_require__(14);
      const user_entity_1 = __webpack_require__(15);
      let AuthService = class AuthService {
        constructor(userRepository, jwtService) {
          this.userRepository = userRepository;
          this.jwtService = jwtService;
        }
        async signIn(username, pass) {
          const user = await this.findOneByEmail(username);
          const isMatch = await bcrypt.compare(pass, user?.password);
          if (!isMatch) {
            throw new common_1.UnauthorizedException();
          }
          const payload = this.extractPayload(user);
          // Defina as durações
          const accessTokenDurationSec = 60 * 60;
          const refreshTokenDurationSec = 7 * 24 * 60 * 60;
          const now = new Date();
          const accessTokenExpires = new Date(
            now.getTime() + accessTokenDurationSec * 1000,
          );
          const refreshTokenExpires = new Date(
            now.getTime() + refreshTokenDurationSec * 1000,
          );
          const accessToken = await this.jwtService.signAsync(payload, {
            expiresIn: `${accessTokenDurationSec}s`,
          });
          const refreshToken = await this.jwtService.signAsync(
            { sub: user.id, type: payload.type },
            { expiresIn: `${refreshTokenDurationSec}s` },
          );
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            birthDate: user.birthDate,
            classroom:
              user instanceof student_entity_1.Student
                ? user.classroom?.id
                : null,
            type: payload.type,
            accessToken,
            refreshToken,
            accessTokenExpires: accessTokenExpires.toISOString(),
            refreshTokenExpires: refreshTokenExpires.toISOString(),
          };
        }
        async refreshToken(refreshToken) {
          const payload = await this.jwtService
            .verifyAsync(refreshToken)
            .catch(() => null);
          if (!payload) {
            throw new common_1.UnauthorizedException(
              'Refresh token inválido ou expirado',
            );
          }
          const user = await this.findOne(payload.sub);
          if (!user) {
            throw new common_1.UnauthorizedException('Usuário não encontrado');
          }
          const newPayload = this.extractPayload(user);
          const accessTokenDurationSec = 60 * 60; // 1 hora
          const now = new Date();
          const accessTokenExpires = new Date(
            now.getTime() + accessTokenDurationSec * 1000,
          );
          const refreshTokenExpires = new Date(payload.exp * 1000);
          const newAccessToken = await this.jwtService.signAsync(newPayload, {
            expiresIn: `${accessTokenDurationSec}s`,
          });
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            birthDate: user.birthDate,
            classroom:
              user instanceof student_entity_1.Student
                ? user.classroom?.id
                : null,
            type: newPayload.type,
            accessToken: newAccessToken,
            refreshToken,
            accessTokenExpires: accessTokenExpires.toISOString(),
            refreshTokenExpires: refreshTokenExpires.toISOString(),
          };
        }
        extractPayload(user) {
          let newPayload;
          if (user instanceof student_entity_1.Student) {
            const student = user;
            newPayload = {
              sub: student.id,
              email: student.email,
              classroom: student.classroom.id,
              type: 'student',
            };
          } else {
            newPayload = { sub: user.id, email: user.email, type: 'teacher' };
          }
          return newPayload;
        }
        async create(createUserDto) {
          const user = new student_entity_1.Student();
          user.name = createUserDto.name;
          user.birthDate = createUserDto.birthDate;
          user.email = createUserDto.email;
          user.password = await bcrypt.hash(createUserDto.password, 10);
          const createdUser = await this.userRepository.save(user);
          return { id: createdUser.id };
        }
        findAll() {
          return this.userRepository.find();
        }
        findOne(id) {
          return this.userRepository.findOneBy({ id });
        }
        findOneByEmail(email) {
          return this.userRepository.findOneBy({ email });
        }
      };
      exports.AuthService = AuthService;
      exports.AuthService = AuthService = tslib_1.__decorate(
        [
          (0, common_1.Injectable)(),
          tslib_1.__param(
            0,
            (0, typeorm_1.InjectRepository)(user_entity_1.User),
          ),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_a =
              typeof typeorm_2.Repository !== 'undefined' &&
              typeorm_2.Repository) === 'function'
              ? _a
              : Object,
            typeof (_b =
              typeof jwt_1.JwtService !== 'undefined' && jwt_1.JwtService) ===
            'function'
              ? _b
              : Object,
          ]),
        ],
        AuthService,
      );

      /***/
    },
    /* 11 */
    /***/ (module) => {
      module.exports = require('@nestjs/jwt');

      /***/
    },
    /* 12 */
    /***/ (module) => {
      module.exports = require('typeorm');

      /***/
    },
    /* 13 */
    /***/ (module) => {
      module.exports = require('bcrypt');

      /***/
    },
    /* 14 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Student = void 0;
      const tslib_1 = __webpack_require__(5);
      const typeorm_1 = __webpack_require__(12);
      const user_entity_1 = __webpack_require__(15);
      const classroom_entity_1 = __webpack_require__(16);
      let Student = class Student extends user_entity_1.User {};
      exports.Student = Student;
      tslib_1.__decorate(
        [
          (0, typeorm_1.ManyToOne)(
            () => classroom_entity_1.Classroom,
            (classroom) => classroom.students,
            {
              eager: true,
            },
          ),
          tslib_1.__metadata(
            'design:type',
            typeof (_a =
              typeof classroom_entity_1.Classroom !== 'undefined' &&
              classroom_entity_1.Classroom) === 'function'
              ? _a
              : Object,
          ),
        ],
        Student.prototype,
        'classroom',
        void 0,
      );
      exports.Student = Student = tslib_1.__decorate(
        [(0, typeorm_1.ChildEntity)()],
        Student,
      );

      /***/
    },
    /* 15 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.User = void 0;
      const tslib_1 = __webpack_require__(5);
      const typeorm_1 = __webpack_require__(12);
      let User = class User {};
      exports.User = User;
      tslib_1.__decorate(
        [
          (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
          tslib_1.__metadata('design:type', String),
        ],
        User.prototype,
        'id',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ type: 'varchar', length: 30 }),
          tslib_1.__metadata('design:type', String),
        ],
        User.prototype,
        'name',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ type: 'varchar', length: 40 }),
          tslib_1.__metadata('design:type', String),
        ],
        User.prototype,
        'email',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ type: 'varchar' }),
          tslib_1.__metadata('design:type', String),
        ],
        User.prototype,
        'password',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ type: 'date', name: 'birth_date' }),
          tslib_1.__metadata(
            'design:type',
            typeof (_a = typeof Date !== 'undefined' && Date) === 'function'
              ? _a
              : Object,
          ),
        ],
        User.prototype,
        'birthDate',
        void 0,
      );
      exports.User = User = tslib_1.__decorate(
        [
          (0, typeorm_1.Entity)(),
          (0, typeorm_1.TableInheritance)({
            column: { type: 'varchar', name: 'type' },
          }),
        ],
        User,
      );

      /***/
    },
    /* 16 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Classroom = void 0;
      const tslib_1 = __webpack_require__(5);
      const typeorm_1 = __webpack_require__(12);
      const student_entity_1 = __webpack_require__(14);
      let Classroom = class Classroom {};
      exports.Classroom = Classroom;
      tslib_1.__decorate(
        [
          (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
          tslib_1.__metadata('design:type', String),
        ],
        Classroom.prototype,
        'id',
        void 0,
      );
      tslib_1.__decorate(
        [(0, typeorm_1.Column)(), tslib_1.__metadata('design:type', String)],
        Classroom.prototype,
        'name',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.OneToMany)(
            () => student_entity_1.Student,
            (student) => student.classroom,
          ),
          tslib_1.__metadata('design:type', Array),
        ],
        Classroom.prototype,
        'students',
        void 0,
      );
      exports.Classroom = Classroom = tslib_1.__decorate(
        [(0, typeorm_1.Entity)()],
        Classroom,
      );

      /***/
    },
    /* 17 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a, _b, _c;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.AuthController = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const auth_service_1 = __webpack_require__(10);
      const create_user_dto_1 = __webpack_require__(18);
      let AuthController = class AuthController {
        constructor(authService) {
          this.authService = authService;
        }
        signIn(signInDto) {
          return this.authService.signIn(
            signInDto.username,
            signInDto.password,
          );
        }
        create(createUserDto) {
          console.log('createUserDto', createUserDto);
          return this.authService.create(createUserDto);
        }
        refresh(body) {
          const { refreshToken } = body;
          return this.authService.refreshToken(refreshToken);
        }
      };
      exports.AuthController = AuthController;
      tslib_1.__decorate(
        [
          (0, common_1.HttpCode)(common_1.HttpStatus.OK),
          (0, common_1.Post)('sign-in'),
          tslib_1.__param(0, (0, common_1.Body)()),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_b = typeof Record !== 'undefined' && Record) === 'function'
              ? _b
              : Object,
          ]),
          tslib_1.__metadata('design:returntype', void 0),
        ],
        AuthController.prototype,
        'signIn',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.HttpCode)(common_1.HttpStatus.OK),
          (0, common_1.Post)('sign-up'),
          tslib_1.__param(0, (0, common_1.Body)()),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_c =
              typeof create_user_dto_1.CreateUserDto !== 'undefined' &&
              create_user_dto_1.CreateUserDto) === 'function'
              ? _c
              : Object,
          ]),
          tslib_1.__metadata('design:returntype', void 0),
        ],
        AuthController.prototype,
        'create',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Post)('refresh-token'),
          (0, common_1.HttpCode)(common_1.HttpStatus.OK),
          tslib_1.__param(0, (0, common_1.Body)()),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [Object]),
          tslib_1.__metadata('design:returntype', void 0),
        ],
        AuthController.prototype,
        'refresh',
        null,
      );
      exports.AuthController = AuthController = tslib_1.__decorate(
        [
          (0, common_1.Controller)('api/auth'),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_a =
              typeof auth_service_1.AuthService !== 'undefined' &&
              auth_service_1.AuthService) === 'function'
              ? _a
              : Object,
          ]),
        ],
        AuthController,
      );

      /***/
    },
    /* 18 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateUserDto = void 0;
      const tslib_1 = __webpack_require__(5);
      const swagger_1 = __webpack_require__(3);
      const class_transformer_1 = __webpack_require__(19);
      const class_validator_1 = __webpack_require__(20);
      class CreateUserDto {}
      exports.CreateUserDto = CreateUserDto;
      tslib_1.__decorate(
        [
          (0, class_validator_1.IsString)(),
          (0, class_validator_1.MinLength)(2, {
            message: 'Name must have atleast 2 characters.',
          }),
          (0, class_validator_1.IsNotEmpty)(),
          (0, swagger_1.ApiProperty)({ description: 'The name' }),
          tslib_1.__metadata('design:type', String),
        ],
        CreateUserDto.prototype,
        'name',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, class_validator_1.IsNotEmpty)(),
          (0, class_validator_1.IsEmail)(
            {},
            { message: 'Please provide valid Email.' },
          ),
          (0, swagger_1.ApiProperty)({ description: 'Email' }),
          tslib_1.__metadata('design:type', String),
        ],
        CreateUserDto.prototype,
        'email',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, class_transformer_1.Type)(() => Date),
          (0, swagger_1.ApiProperty)({
            description: 'BirthDate',
            example: '1995-08-15T00:00:00.000Z',
          }),
          (0, swagger_1.ApiProperty)({ description: 'BirthDate' }),
          tslib_1.__metadata(
            'design:type',
            typeof (_a = typeof Date !== 'undefined' && Date) === 'function'
              ? _a
              : Object,
          ),
        ],
        CreateUserDto.prototype,
        'birthDate',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, class_validator_1.IsNotEmpty)(),
          (0, swagger_1.ApiProperty)({ description: 'Password' }),
          tslib_1.__metadata('design:type', String),
        ],
        CreateUserDto.prototype,
        'password',
        void 0,
      );

      /***/
    },
    /* 19 */
    /***/ (module) => {
      module.exports = require('class-transformer');

      /***/
    },
    /* 20 */
    /***/ (module) => {
      module.exports = require('class-validator');

      /***/
    },
    /* 21 */
    /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.jwtConstants = void 0;
      exports.jwtConstants = {
        secret: 'xablau',
      };

      /***/
    },
    /* 22 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.StudentModule = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const typeorm_1 = __webpack_require__(6);
      const course_module_1 = __webpack_require__(23);
      const lesson_entity_1 = __webpack_require__(35);
      const lesson_service_1 = __webpack_require__(43);
      const registration_entity_1 = __webpack_require__(37);
      const student_lesson_1 = __webpack_require__(38);
      const student_entity_1 = __webpack_require__(14);
      const student_controller_1 = __webpack_require__(51);
      const student_service_1 = __webpack_require__(30);
      const registration_service_1 = __webpack_require__(36);
      let StudentModule = class StudentModule {};
      exports.StudentModule = StudentModule;
      exports.StudentModule = StudentModule = tslib_1.__decorate(
        [
          (0, common_1.Module)({
            imports: [
              typeorm_1.TypeOrmModule.forFeature([student_entity_1.Student]),
              typeorm_1.TypeOrmModule.forFeature([
                student_lesson_1.StudentLesson,
              ]),
              typeorm_1.TypeOrmModule.forFeature([lesson_entity_1.Lesson]),
              typeorm_1.TypeOrmModule.forFeature([
                registration_entity_1.Registration,
              ]),
              course_module_1.CourseModule,
            ],
            controllers: [student_controller_1.StudentController],
            providers: [
              student_service_1.StudentService,
              lesson_service_1.LessonService,
              registration_service_1.RegistrationService,
            ],
            exports: [
              student_service_1.StudentService,
              lesson_service_1.LessonService,
              registration_service_1.RegistrationService,
            ],
          }),
        ],
        StudentModule,
      );

      /***/
    },
    /* 23 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CourseModule = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const typeorm_1 = __webpack_require__(6);
      const classroom_module_1 = __webpack_require__(24);
      const classroom_course_1 = __webpack_require__(40);
      const student_module_1 = __webpack_require__(22);
      const course_controller_1 = __webpack_require__(46);
      const course_service_1 = __webpack_require__(32);
      const course_entity_1 = __webpack_require__(34);
      const lesson_service_1 = __webpack_require__(43);
      const lesson_entity_1 = __webpack_require__(35);
      let CourseModule = class CourseModule {};
      exports.CourseModule = CourseModule;
      exports.CourseModule = CourseModule = tslib_1.__decorate(
        [
          (0, common_1.Module)({
            imports: [
              typeorm_1.TypeOrmModule.forFeature([course_entity_1.Course]),
              typeorm_1.TypeOrmModule.forFeature([
                classroom_course_1.ClassroomCourser,
              ]),
              typeorm_1.TypeOrmModule.forFeature([lesson_entity_1.Lesson]),
              (0, common_1.forwardRef)(
                () => classroom_module_1.ClassroomModule,
              ),
              (0, common_1.forwardRef)(() => student_module_1.StudentModule),
            ],
            controllers: [course_controller_1.CourseController],
            providers: [
              course_service_1.CourseService,
              lesson_service_1.LessonService,
            ],
            exports: [
              course_service_1.CourseService,
              lesson_service_1.LessonService,
            ],
          }),
        ],
        CourseModule,
      );

      /***/
    },
    /* 24 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ClassroomModule = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const typeorm_1 = __webpack_require__(6);
      const student_module_1 = __webpack_require__(22);
      const classroom_controller_1 = __webpack_require__(25);
      const classroom_service_1 = __webpack_require__(33);
      const classroom_entity_1 = __webpack_require__(16);
      const classroom_course_1 = __webpack_require__(40);
      let ClassroomModule = class ClassroomModule {};
      exports.ClassroomModule = ClassroomModule;
      exports.ClassroomModule = ClassroomModule = tslib_1.__decorate(
        [
          (0, common_1.Module)({
            imports: [
              typeorm_1.TypeOrmModule.forFeature([
                classroom_entity_1.Classroom,
                classroom_course_1.ClassroomCourser,
              ]),
              (0, common_1.forwardRef)(() => student_module_1.StudentModule),
            ],
            controllers: [classroom_controller_1.ClassroomController],
            providers: [classroom_service_1.ClassroomService],
            exports: [classroom_service_1.ClassroomService],
          }),
        ],
        ClassroomModule,
      );

      /***/
    },
    /* 25 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a, _b, _c, _d, _e;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ClassroomController = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const swagger_1 = __webpack_require__(3);
      const require_user_type_decorator_1 = __webpack_require__(26);
      const student_create_1 = __webpack_require__(29);
      const student_service_1 = __webpack_require__(30);
      const classroom_service_1 = __webpack_require__(33);
      const create_classroom_dto_1 = __webpack_require__(45);
      let ClassroomController = class ClassroomController {
        constructor(classroomService, studentService) {
          this.classroomService = classroomService;
          this.studentService = studentService;
        }
        async create(createClassroomDto) {
          return await this.classroomService.create(createClassroomDto);
        }
        async listAll() {
          return await this.classroomService.listAll();
        }
        async createAStudenty(id, createStudentDto) {
          await this.classroomService.createStudenty(id, createStudentDto);
          return new Response('Ok');
        }
        async listAllStudents(id, page = 1, limit = 10) {
          limit = limit > 100 ? 100 : limit;
          return await this.classroomService.listAllStudent(page, limit, id);
        }
        async listAllCourses(id, page = 1, limit = 10) {
          console.log('listAllCourses');
          limit = limit > 100 ? 100 : limit;
          return await this.classroomService.listAllCourses(page, limit, id);
        }
        async enabledCourse(id, idCourse) {
          await this.classroomService.enabledCourser(id, idCourse);
        }
      };
      exports.ClassroomController = ClassroomController;
      tslib_1.__decorate(
        [
          (0, common_1.Post)(),
          (0, require_user_type_decorator_1.RequireUserType)('teacher'),
          (0, swagger_1.ApiBody)({
            type: create_classroom_dto_1.CreateClassroomDto,
          }),
          tslib_1.__param(0, (0, common_1.Body)()),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_c =
              typeof create_classroom_dto_1.CreateClassroomDto !==
                'undefined' && create_classroom_dto_1.CreateClassroomDto) ===
            'function'
              ? _c
              : Object,
          ]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        ClassroomController.prototype,
        'create',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Get)(),
          (0, require_user_type_decorator_1.RequireUserType)('teacher'),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', []),
          tslib_1.__metadata(
            'design:returntype',
            typeof (_d = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _d
              : Object,
          ),
        ],
        ClassroomController.prototype,
        'listAll',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Post)('/:id/students'),
          (0, swagger_1.ApiBody)({ type: student_create_1.CreateStudentDto }),
          tslib_1.__param(0, (0, common_1.Param)('id')),
          tslib_1.__param(1, (0, common_1.Body)()),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [
            String,
            typeof (_e =
              typeof student_create_1.CreateStudentDto !== 'undefined' &&
              student_create_1.CreateStudentDto) === 'function'
              ? _e
              : Object,
          ]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        ClassroomController.prototype,
        'createAStudenty',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Get)('/:id/students'),
          (0, require_user_type_decorator_1.RequireUserType)('teacher'),
          tslib_1.__param(0, (0, common_1.Param)('id')),
          tslib_1.__param(1, (0, common_1.Query)('page')),
          tslib_1.__param(2, (0, common_1.Query)('limit')),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [String, Object, Object]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        ClassroomController.prototype,
        'listAllStudents',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Get)('/:id/courses'),
          (0, require_user_type_decorator_1.RequireUserType)('teacher'),
          tslib_1.__param(0, (0, common_1.Param)('id')),
          tslib_1.__param(1, (0, common_1.Query)('page')),
          tslib_1.__param(2, (0, common_1.Query)('limit')),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [String, Object, Object]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        ClassroomController.prototype,
        'listAllCourses',
        null,
      );
      tslib_1.__decorate(
        [
          (0, require_user_type_decorator_1.RequireUserType)('teacher'),
          (0, common_1.Patch)('/:id/courses/:idCourse/enable'),
          tslib_1.__param(0, (0, common_1.Param)('id')),
          tslib_1.__param(1, (0, common_1.Param)('idCourse')),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [String, String]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        ClassroomController.prototype,
        'enabledCourse',
        null,
      );
      exports.ClassroomController = ClassroomController = tslib_1.__decorate(
        [
          (0, common_1.Controller)('/api/class-room'),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_a =
              typeof classroom_service_1.ClassroomService !== 'undefined' &&
              classroom_service_1.ClassroomService) === 'function'
              ? _a
              : Object,
            typeof (_b =
              typeof student_service_1.StudentService !== 'undefined' &&
              student_service_1.StudentService) === 'function'
              ? _b
              : Object,
          ]),
        ],
        ClassroomController,
      );

      /***/
    },
    /* 26 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.RequireUserType = void 0;
      const common_1 = __webpack_require__(1);
      const user_type_guard_1 = __webpack_require__(27);
      const RequireUserType = (type) =>
        (0, common_1.applyDecorators)(
          (0, common_1.SetMetadata)('user_type', type),
          (0, common_1.UseGuards)(user_type_guard_1.UserTypeGuard),
        );
      exports.RequireUserType = RequireUserType;

      /***/
    },
    /* 27 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.UserTypeGuard = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const core_1 = __webpack_require__(2);
      const jwt = tslib_1.__importStar(__webpack_require__(28));
      const constants_1 = __webpack_require__(21);
      let UserTypeGuard = class UserTypeGuard {
        constructor(reflector) {
          this.reflector = reflector;
        }
        canActivate(context) {
          const requiredType = this.reflector.get(
            'user_type',
            context.getHandler(),
          );
          if (!requiredType) {
            return true;
          }
          const request = context.switchToHttp().getRequest();
          const authHeader = request.headers['authorization'];
          if (!authHeader) {
            throw new common_1.UnauthorizedException(
              'Authorization header missing',
            );
          }
          const token = authHeader.split(' ')[1];
          let decoded;
          try {
            decoded = jwt.verify(token, constants_1.jwtConstants.secret);
          } catch {
            throw new common_1.UnauthorizedException(
              'Invalid or expired token',
            );
          }
          if (decoded.type !== requiredType) {
            throw new common_1.UnauthorizedException(
              `Only users of type "${requiredType}" are allowed`,
            );
          }
          request.user = decoded;
          return true;
        }
      };
      exports.UserTypeGuard = UserTypeGuard;
      exports.UserTypeGuard = UserTypeGuard = tslib_1.__decorate(
        [
          (0, common_1.Injectable)(),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_a =
              typeof core_1.Reflector !== 'undefined' && core_1.Reflector) ===
            'function'
              ? _a
              : Object,
          ]),
        ],
        UserTypeGuard,
      );

      /***/
    },
    /* 28 */
    /***/ (module) => {
      module.exports = require('jsonwebtoken');

      /***/
    },
    /* 29 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateStudentDto = void 0;
      const create_user_dto_1 = __webpack_require__(18);
      class CreateStudentDto extends create_user_dto_1.CreateUserDto {}
      exports.CreateStudentDto = CreateStudentDto;

      /***/
    },
    /* 30 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a, _b, _c, _d;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.StudentService = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const typeorm_1 = __webpack_require__(6);
      const nestjs_typeorm_paginate_1 = __webpack_require__(31);
      const typeorm_2 = __webpack_require__(12);
      const course_service_1 = __webpack_require__(32);
      const lesson_service_1 = __webpack_require__(43);
      const student_entity_1 = __webpack_require__(14);
      const registration_service_1 = __webpack_require__(36);
      const student_mapper_1 = __webpack_require__(44);
      let StudentService = class StudentService {
        constructor(
          studentyRepository,
          registrationService,
          lessonService,
          couserService,
        ) {
          this.studentyRepository = studentyRepository;
          this.registrationService = registrationService;
          this.lessonService = lessonService;
          this.couserService = couserService;
        }
        async create(classromm, createStudentDto) {
          await this.studentyRepository.save(
            await student_mapper_1.StudentMapper.toEntity(
              createStudentDto,
              classromm,
            ),
          );
        }
        async getAllCourser(student) {
          const registrations =
            await this.registrationService.findAllByStudent(student);
          return registrations.map((registration) =>
            student_mapper_1.StudentMapper.createRegistrationResponse(
              registration,
            ),
          );
        }
        async findById(id) {
          const student = await this.studentyRepository
            .createQueryBuilder('student')
            .leftJoinAndSelect('student.classroom', 'classroom')
            .where('student.id = :id', { id })
            .andWhere('student.type = :type', { type: 'Student' })
            .getOne();
          if (!student)
            throw new common_1.NotFoundException('Student not found');
          return student;
        }
        async findByClassId(page, limit, id) {
          const queryBuilder =
            this.studentyRepository.createQueryBuilder('student');
          queryBuilder.where('student.classroomId = :classroomId', {
            classroomId: id,
          });
          const pagination = await (0, nestjs_typeorm_paginate_1.paginate)(
            queryBuilder,
            { page, limit },
          );
          return new nestjs_typeorm_paginate_1.Pagination(
            pagination.items.map(
              student_mapper_1.StudentMapper.createStudentResponse,
            ),
            pagination.meta,
            pagination.links,
          );
        }
        async getCourser(id, idCourser, idClassRoom) {
          const student = await this.findOne(id);
          const { course } = await this.couserService.findOne(
            idCourser,
            idClassRoom,
          );
          return await this.registrationService.findOneByStudentAndCourse(
            student,
            course,
          );
        }
        async checkCourse(id, idCourser, idClassRoom) {
          const { course } = await this.couserService.findOne(
            idCourser,
            idClassRoom,
          );
          const student = await this.findOne(id);
          console.log('Checking course for student:', student.id, course.id);
          await this.registrationService.upset(student, course);
        }
        async checkLesson(id, idLesson) {
          const lesson = await this.lessonService.findOne(idLesson);
          const student = await this.findOne(id);
          await this.registrationService.checkLesson(
            student,
            lesson.course,
            lesson,
          );
        }
        async finishLesson(id, idLesson) {
          const lesson = await this.lessonService.findOne(idLesson);
          const student = await this.findOne(id);
          await this.registrationService.finishLesson(
            student,
            lesson.course,
            lesson,
          );
        }
        findAll() {
          return `This action returns all student`;
        }
        async findOne(id) {
          const student = await this.studentyRepository
            .createQueryBuilder('student')
            .leftJoinAndSelect('student.classroom', 'classroom')
            .where('student.id = :id', { id })
            .andWhere('student.type = :type', { type: 'Student' })
            .getOne();
          if (!student)
            throw new common_1.NotFoundException('Student not found');
          return student;
        }
        update(id, updateStudentDto) {
          return `This action updates a #${id} student`;
        }
        remove(id) {
          return `This action removes a #${id} student`;
        }
      };
      exports.StudentService = StudentService;
      exports.StudentService = StudentService = tslib_1.__decorate(
        [
          (0, common_1.Injectable)(),
          tslib_1.__param(
            0,
            (0, typeorm_1.InjectRepository)(student_entity_1.Student),
          ),
          tslib_1.__param(
            2,
            (0, common_1.Inject)(
              (0, common_1.forwardRef)(() => lesson_service_1.LessonService),
            ),
          ),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_a =
              typeof typeorm_2.Repository !== 'undefined' &&
              typeorm_2.Repository) === 'function'
              ? _a
              : Object,
            typeof (_b =
              typeof registration_service_1.RegistrationService !==
                'undefined' && registration_service_1.RegistrationService) ===
            'function'
              ? _b
              : Object,
            typeof (_c =
              typeof lesson_service_1.LessonService !== 'undefined' &&
              lesson_service_1.LessonService) === 'function'
              ? _c
              : Object,
            typeof (_d =
              typeof course_service_1.CourseService !== 'undefined' &&
              course_service_1.CourseService) === 'function'
              ? _d
              : Object,
          ]),
        ],
        StudentService,
      );

      /***/
    },
    /* 31 */
    /***/ (module) => {
      module.exports = require('nestjs-typeorm-paginate');

      /***/
    },
    /* 32 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a, _b, _c, _d;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CourseService = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const typeorm_1 = __webpack_require__(6);
      const typeorm_2 = __webpack_require__(12);
      const classroom_service_1 = __webpack_require__(33);
      const classroom_course_1 = __webpack_require__(40);
      const classroom_mapper_1 = __webpack_require__(39);
      const registration_service_1 = __webpack_require__(36);
      const course_entity_1 = __webpack_require__(34);
      const courser_mapper_1 = __webpack_require__(41);
      let CourseService = class CourseService {
        constructor(
          repository,
          classroomService,
          classroomCourseRepository,
          registrationService,
        ) {
          this.repository = repository;
          this.classroomService = classroomService;
          this.classroomCourseRepository = classroomCourseRepository;
          this.registrationService = registrationService;
        }
        async create(createCourseDto, userId) {
          const course =
            courser_mapper_1.CourseMapper.toEntity(createCourseDto);
          course.teacher = { id: userId };
          await this.repository.save(course);
          await this.classroomService.includeCourserInAllClassroom(course);
        }
        async update(id, updateCourse) {
          const course = await this.findById(id);
          this.registrationService.removeAllProgressFromCourse(id);
          const updatedCourse = courser_mapper_1.CourseMapper.updateEntity(
            updateCourse,
            course,
          );
          return this.repository.save(updatedCourse);
        }
        async findById(id) {
          const course = await this.repository.findOne({
            where: { id },
            relations: ['lessons'],
          });
          console.log('curso', course);
          if (!course) {
            throw new common_1.NotFoundException(
              `Course with id ${id} not found`,
            );
          }
          return course;
        }
        async findOne(id, classroom) {
          console.log('findOne', id, classroom);
          const classroomCourse = await this.classroomCourseRepository.findOne({
            where: {
              course: { id },
              classroom: { id: classroom },
              enabled: true,
            },
            relations: ['course'],
          });
          console.log('classroomCourse', classroomCourse);
          if (!classroomCourse) {
            throw new common_1.NotFoundException(
              `Course not found for this classroom`,
            );
          }
          return classroomCourse;
        }
        async findAll(classroom, userId) {
          const queryBuilder = this.classroomCourseRepository
            .createQueryBuilder('classroom_course')
            .leftJoinAndSelect('classroom_course.course', 'course')
            .leftJoinAndSelect('course.teacher', 'teacher')
            .where('classroom_course.classroom = :classroomId', {
              classroomId: classroom,
            })
            .andWhere('classroom_course.enabled = :enabled', { enabled: true });
          const classroomCourses = await queryBuilder.getMany();
          const responses = await Promise.all(
            classroomCourses.map(async (classroomCourse) => {
              const progress =
                await this.registrationService.getProgressByStudentAndCourse(
                  userId,
                  classroomCourse.course.id,
                );
              return classroom_mapper_1.ClassroomMapper.toResponse(
                classroomCourse,
                progress,
              );
            }),
          );
          return responses;
        }
      };
      exports.CourseService = CourseService;
      exports.CourseService = CourseService = tslib_1.__decorate(
        [
          (0, common_1.Injectable)(),
          tslib_1.__param(
            0,
            (0, typeorm_1.InjectRepository)(course_entity_1.Course),
          ),
          tslib_1.__param(
            1,
            (0, common_1.Inject)(
              (0, common_1.forwardRef)(
                () => classroom_service_1.ClassroomService,
              ),
            ),
          ),
          tslib_1.__param(
            2,
            (0, typeorm_1.InjectRepository)(
              classroom_course_1.ClassroomCourser,
            ),
          ),
          tslib_1.__param(
            3,
            (0, common_1.Inject)(
              (0, common_1.forwardRef)(
                () => registration_service_1.RegistrationService,
              ),
            ),
          ),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_a =
              typeof typeorm_2.Repository !== 'undefined' &&
              typeorm_2.Repository) === 'function'
              ? _a
              : Object,
            typeof (_b =
              typeof classroom_service_1.ClassroomService !== 'undefined' &&
              classroom_service_1.ClassroomService) === 'function'
              ? _b
              : Object,
            typeof (_c =
              typeof typeorm_2.Repository !== 'undefined' &&
              typeorm_2.Repository) === 'function'
              ? _c
              : Object,
            typeof (_d =
              typeof registration_service_1.RegistrationService !==
                'undefined' && registration_service_1.RegistrationService) ===
            'function'
              ? _d
              : Object,
          ]),
        ],
        CourseService,
      );

      /***/
    },
    /* 33 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a, _b, _c, _d, _e;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ClassroomService = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const typeorm_1 = __webpack_require__(6);
      const nestjs_typeorm_paginate_1 = __webpack_require__(31);
      const typeorm_2 = __webpack_require__(12);
      const course_entity_1 = __webpack_require__(34);
      const registration_service_1 = __webpack_require__(36);
      const student_service_1 = __webpack_require__(30);
      const classroom_mapper_1 = __webpack_require__(39);
      const classroom_course_1 = __webpack_require__(40);
      const classroom_entity_1 = __webpack_require__(16);
      const IS_DEFAULT_ENABLED_COURSER = false;
      let ClassroomService = class ClassroomService {
        constructor(
          repository,
          classroomCourseRepository,
          studentService,
          registrationService,
          dataSource,
        ) {
          this.repository = repository;
          this.classroomCourseRepository = classroomCourseRepository;
          this.studentService = studentService;
          this.registrationService = registrationService;
          this.dataSource = dataSource;
        }
        async create(createClassroomDto) {
          const classroom = await this.repository.save(
            classroom_mapper_1.ClassroomMapper.toEntity(createClassroomDto),
          );
          await this.includeAllCurserInAllClassroom(classroom);
          return classroom;
        }
        async listAll() {
          return await this.repository.find({});
        }
        async createStudenty(id, createStudent) {
          const classRoom = await this.findOne(id);
          if (!classRoom) {
            throw new common_1.BadRequestException('Classroom not found');
          }
          this.studentService.create(classRoom, createStudent);
        }
        findOne(id) {
          return this.repository.findOneBy({ id });
        }
        async listAllStudent(page, limit, id) {
          return await this.studentService.findByClassId(page, limit, id);
        }
        async enabledCourser(classroomId, courseId) {
          const record = await this.classroomCourseRepository.findOne({
            where: {
              classroom: { id: classroomId },
              course: { id: courseId },
            },
            relations: ['classroom', 'course'],
          });
          if (!record) {
            throw new common_1.NotFoundException(
              `ClassroomCourser not found for classroom ${classroomId} and course ${courseId}`,
            );
          }
          record.enabled = true;
          record.startDate = new Date();
          return this.classroomCourseRepository.save(record);
        }
        async listAllCourses(page, limit, id) {
          const queryBuilder = this.classroomCourseRepository
            .createQueryBuilder('classroom_course')
            .leftJoinAndSelect('classroom_course.course', 'course')
            .leftJoinAndSelect('classroom_course.classroom', 'classroom')
            .leftJoinAndSelect('classroom.students', 'students')
            .leftJoinAndSelect('course.lessons', 'lessons')
            .where('classroom_course.classroom = :classroomId', {
              classroomId: id,
            });
          const pagination = await (0, nestjs_typeorm_paginate_1.paginate)(
            queryBuilder,
            {
              page,
              limit,
            },
          );
          const dtos = await Promise.all(
            pagination.items.map(async (c) => {
              const progress =
                await this.registrationService.getStudentProgressOfClass(
                  c.classroom,
                  c.course,
                );
              return classroom_mapper_1.ClassroomMapper.toResponse(c, progress);
            }),
          );
          return new nestjs_typeorm_paginate_1.Pagination(
            dtos,
            pagination.meta,
            pagination.links,
          );
        }
        async includeAllCurserInAllClassroom(classroom) {
          const entityManager = this.dataSource.manager;
          const [selectQuery, params] = entityManager
            .createQueryBuilder()
            .select([
              'course.id AS "courseId"',
              `'${classroom.id}' AS "classRoomId"`,
              `${IS_DEFAULT_ENABLED_COURSER} AS "enabled"`,
            ])
            .from(course_entity_1.Course, 'course')
            .getQueryAndParameters();
          await entityManager.query(
            `
      INSERT INTO classroom_courser("courseId", "classroomId", "enabled")
      ${selectQuery}
      `,
            params,
          );
        }
        async includeCourserInAllClassroom(course) {
          const entityManager = this.dataSource.manager;
          const [selectQuery, params] = entityManager
            .createQueryBuilder()
            .select([
              `'${course.id}' AS "courseId"`,
              'classroom.id AS "classRoomId"',
              `${IS_DEFAULT_ENABLED_COURSER} AS "enabled"`,
            ])
            .from(classroom_entity_1.Classroom, 'classroom')
            .getQueryAndParameters();
          await entityManager.query(
            `
      INSERT INTO classroom_courser("courseId", "classroomId", "enabled")
      ${selectQuery}
      `,
            params,
          );
        }
      };
      exports.ClassroomService = ClassroomService;
      exports.ClassroomService = ClassroomService = tslib_1.__decorate(
        [
          (0, common_1.Injectable)(),
          tslib_1.__param(
            0,
            (0, typeorm_1.InjectRepository)(classroom_entity_1.Classroom),
          ),
          tslib_1.__param(
            1,
            (0, typeorm_1.InjectRepository)(
              classroom_course_1.ClassroomCourser,
            ),
          ),
          tslib_1.__param(
            2,
            (0, common_1.Inject)(
              (0, common_1.forwardRef)(() => student_service_1.StudentService),
            ),
          ),
          tslib_1.__param(
            3,
            (0, common_1.Inject)(
              (0, common_1.forwardRef)(
                () => registration_service_1.RegistrationService,
              ),
            ),
          ),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_a =
              typeof typeorm_2.Repository !== 'undefined' &&
              typeorm_2.Repository) === 'function'
              ? _a
              : Object,
            typeof (_b =
              typeof typeorm_2.Repository !== 'undefined' &&
              typeorm_2.Repository) === 'function'
              ? _b
              : Object,
            typeof (_c =
              typeof student_service_1.StudentService !== 'undefined' &&
              student_service_1.StudentService) === 'function'
              ? _c
              : Object,
            typeof (_d =
              typeof registration_service_1.RegistrationService !==
                'undefined' && registration_service_1.RegistrationService) ===
            'function'
              ? _d
              : Object,
            typeof (_e =
              typeof typeorm_2.DataSource !== 'undefined' &&
              typeorm_2.DataSource) === 'function'
              ? _e
              : Object,
          ]),
        ],
        ClassroomService,
      );

      /***/
    },
    /* 34 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Course = void 0;
      const tslib_1 = __webpack_require__(5);
      const typeorm_1 = __webpack_require__(12);
      const user_entity_1 = __webpack_require__(15);
      const lesson_entity_1 = __webpack_require__(35);
      let Course = class Course {};
      exports.Course = Course;
      tslib_1.__decorate(
        [
          (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
          tslib_1.__metadata('design:type', String),
        ],
        Course.prototype,
        'id',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ type: 'varchar', length: 30 }),
          tslib_1.__metadata('design:type', String),
        ],
        Course.prototype,
        'name',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
          tslib_1.__metadata('design:type', String),
        ],
        Course.prototype,
        'description',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.OneToMany)(
            () => lesson_entity_1.Lesson,
            (l) => l.course,
            { cascade: true },
          ),
          tslib_1.__metadata('design:type', Array),
        ],
        Course.prototype,
        'lessons',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true }),
          tslib_1.__metadata(
            'design:type',
            typeof (_a =
              typeof user_entity_1.User !== 'undefined' &&
              user_entity_1.User) === 'function'
              ? _a
              : Object,
          ),
        ],
        Course.prototype,
        'teacher',
        void 0,
      );
      exports.Course = Course = tslib_1.__decorate(
        [(0, typeorm_1.Entity)()],
        Course,
      );

      /***/
    },
    /* 35 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Lesson = exports.LessonType = void 0;
      const tslib_1 = __webpack_require__(5);
      const typeorm_1 = __webpack_require__(12);
      const course_entity_1 = __webpack_require__(34);
      var LessonType;
      (function (LessonType) {
        LessonType['PDF'] = 'pdf';
        LessonType['VIDEO'] = 'video';
        LessonType['AUDIO'] = 'audio';
      })(LessonType || (exports.LessonType = LessonType = {}));
      let Lesson = class Lesson {};
      exports.Lesson = Lesson;
      tslib_1.__decorate(
        [
          (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
          tslib_1.__metadata('design:type', String),
        ],
        Lesson.prototype,
        'id',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
          tslib_1.__metadata('design:type', String),
        ],
        Lesson.prototype,
        'name',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ type: 'enum', enum: LessonType }),
          tslib_1.__metadata('design:type', String),
        ],
        Lesson.prototype,
        'type',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
          tslib_1.__metadata('design:type', String),
        ],
        Lesson.prototype,
        'url',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ type: 'int', default: 0 }),
          tslib_1.__metadata('design:type', Number),
        ],
        Lesson.prototype,
        'order',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.ManyToOne)(
            () => course_entity_1.Course,
            (course) => course.lessons,
            {
              eager: true,
            },
          ),
          tslib_1.__metadata(
            'design:type',
            typeof (_a =
              typeof course_entity_1.Course !== 'undefined' &&
              course_entity_1.Course) === 'function'
              ? _a
              : Object,
          ),
        ],
        Lesson.prototype,
        'course',
        void 0,
      );
      exports.Lesson = Lesson = tslib_1.__decorate(
        [(0, typeorm_1.Entity)()],
        Lesson,
      );

      /***/
    },
    /* 36 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.RegistrationService = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const typeorm_1 = __webpack_require__(12);
      const typeorm_2 = __webpack_require__(6);
      const registration_entity_1 = __webpack_require__(37);
      const student_lesson_1 = __webpack_require__(38);
      let RegistrationService = class RegistrationService {
        constructor(repository) {
          this.repository = repository;
        }
        async findOneByStudentAndCourse(student, course) {
          return await this.repository.findOne({
            where: {
              student: student,
              course: course,
            },
            relations: [
              'lessons',
              'lessons.lesson',
              'course',
              'course.lessons',
            ],
          });
        }
        async finishLesson(student, course, lesson) {
          const registration = await this.upset(student, course);
          console.log(registration);
          let lessonStudent = await registration.lessons.find(
            (l) => l.lesson.id === lesson.id,
          );
          if (!lessonStudent) {
            await this.checkLesson(student, course, lesson);
            lessonStudent = await registration.lessons.find(
              (l) => l.lesson.id === lesson.id,
            );
          }
          lessonStudent.endDate = new Date();
          this.updateProgress(registration);
          if (registration.progress === 100) {
            registration.endDate = new Date();
          }
          await this.repository.save(registration);
        }
        async checkLesson(student, course, lesson) {
          const registration = await this.upset(student, course);
          if (
            await registration.lessons.find((l) => l.lesson.id === lesson.id)
          ) {
            return;
          }
          const newLesson = new student_lesson_1.StudentLesson();
          newLesson.lesson = lesson;
          newLesson.registration = registration;
          newLesson.startDate = new Date();
          registration.lessons.push(newLesson);
          await this.repository.save(registration);
        }
        async getProgressByStudentAndCourse(studentId, courseId) {
          const registration = await this.repository.findOne({
            where: {
              student: { id: studentId },
              course: { id: courseId },
            },
          });
          if (!registration) {
            return 0;
          }
          return registration.progress;
        }
        async findAllByStudent(student) {
          return await this.repository.find({
            where: {
              student: student,
            },
            relations: [
              'lessons',
              'lessons.lesson',
              'course',
              'course.lessons',
            ],
          });
        }
        async removeAllProgressFromCourse(courseId) {
          const registrations = await this.repository.find({
            where: { course: { id: courseId } },
            relations: ['lessons'],
          });
          for (const reg of registrations) {
            reg.lessons = [];
            reg.progress = 0;
            reg.startDate = new Date();
            reg.endDate = null;
          }
          await this.repository.save(registrations);
        }
        async upset(student, course) {
          const registration = await this.repository.findOne({
            where: {
              student: student,
              course: course,
            },
            relations: [
              'lessons',
              'lessons.lesson',
              'course',
              'course.lessons',
            ],
          });
          if (registration) {
            return registration;
          }
          const newLesson = new registration_entity_1.Registration();
          newLesson.course = course;
          newLesson.student = student;
          newLesson.progress = 0;
          newLesson.startDate = new Date();
          newLesson.lessons = [];
          return await this.repository.save(newLesson);
        }
        async getStudentProgressOfClass(classRoom, course) {
          const sum = await this.repository
            .createQueryBuilder('registration')
            .select('SUM(registration.progress)', 'progress')
            .leftJoin('registration.student', 'student')
            .leftJoin('registration.course', 'course')
            .leftJoin('student.classroom', 'classroom')
            .where('classroom.id = :idClassroom', { idClassroom: classRoom.id })
            .andWhere('course.id = :idCourser', { idCourser: course.id })
            .getRawOne();
          console.log(classRoom);
          console.log(classRoom.students);
          console.log(
            sum.progress / (classRoom.students ? classRoom.students.length : 1),
          );
          return (
            sum.progress / (classRoom.students ? classRoom.students.length : 1)
          );
        }
        updateProgress(registration) {
          const totalLessons = registration.course.lessons.length;
          console.log(totalLessons);
          const completedLessons = registration.lessons.filter(
            (l) => l.endDate !== null && l.endDate !== undefined,
          ).length;
          console.log(completedLessons);
          const progress =
            totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
          registration.progress = progress;
          return registration;
        }
      };
      exports.RegistrationService = RegistrationService;
      exports.RegistrationService = RegistrationService = tslib_1.__decorate(
        [
          (0, common_1.Injectable)(),
          tslib_1.__param(
            0,
            (0, typeorm_2.InjectRepository)(registration_entity_1.Registration),
          ),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_a =
              typeof typeorm_1.Repository !== 'undefined' &&
              typeorm_1.Repository) === 'function'
              ? _a
              : Object,
          ]),
        ],
        RegistrationService,
      );

      /***/
    },
    /* 37 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a, _b, _c, _d;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Registration = void 0;
      const tslib_1 = __webpack_require__(5);
      const typeorm_1 = __webpack_require__(12);
      const course_entity_1 = __webpack_require__(34);
      const student_lesson_1 = __webpack_require__(38);
      const student_entity_1 = __webpack_require__(14);
      let Registration = class Registration {};
      exports.Registration = Registration;
      tslib_1.__decorate(
        [
          (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
          tslib_1.__metadata('design:type', String),
        ],
        Registration.prototype,
        'id',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.ManyToOne)(() => course_entity_1.Course),
          tslib_1.__metadata(
            'design:type',
            typeof (_a =
              typeof course_entity_1.Course !== 'undefined' &&
              course_entity_1.Course) === 'function'
              ? _a
              : Object,
          ),
        ],
        Registration.prototype,
        'course',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.ManyToOne)(() => student_entity_1.Student),
          tslib_1.__metadata(
            'design:type',
            typeof (_b =
              typeof student_entity_1.Student !== 'undefined' &&
              student_entity_1.Student) === 'function'
              ? _b
              : Object,
          ),
        ],
        Registration.prototype,
        'student',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.OneToMany)(
            () => student_lesson_1.StudentLesson,
            (l) => l.registration,
            {
              cascade: true,
              lazy: false,
            },
          ),
          tslib_1.__metadata('design:type', Array),
        ],
        Registration.prototype,
        'lessons',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({
            type: 'float',
            name: 'progress',
            nullable: true,
          }),
          tslib_1.__metadata('design:type', Number),
        ],
        Registration.prototype,
        'progress',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({
            type: 'date',
            name: 'startDate',
            nullable: true,
          }),
          tslib_1.__metadata(
            'design:type',
            typeof (_c = typeof Date !== 'undefined' && Date) === 'function'
              ? _c
              : Object,
          ),
        ],
        Registration.prototype,
        'startDate',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({
            type: 'date',
            name: 'endDate',
            nullable: true,
          }),
          tslib_1.__metadata(
            'design:type',
            typeof (_d = typeof Date !== 'undefined' && Date) === 'function'
              ? _d
              : Object,
          ),
        ],
        Registration.prototype,
        'endDate',
        void 0,
      );
      exports.Registration = Registration = tslib_1.__decorate(
        [(0, typeorm_1.Entity)(), (0, typeorm_1.Unique)(['course', 'student'])],
        Registration,
      );

      /***/
    },
    /* 38 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a, _b, _c, _d;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.StudentLesson = void 0;
      const tslib_1 = __webpack_require__(5);
      const typeorm_1 = __webpack_require__(12);
      const lesson_entity_1 = __webpack_require__(35);
      const registration_entity_1 = __webpack_require__(37);
      let StudentLesson = class StudentLesson {};
      exports.StudentLesson = StudentLesson;
      tslib_1.__decorate(
        [
          (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
          tslib_1.__metadata('design:type', String),
        ],
        StudentLesson.prototype,
        'id',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.ManyToOne)(() => lesson_entity_1.Lesson),
          tslib_1.__metadata(
            'design:type',
            typeof (_a =
              typeof lesson_entity_1.Lesson !== 'undefined' &&
              lesson_entity_1.Lesson) === 'function'
              ? _a
              : Object,
          ),
        ],
        StudentLesson.prototype,
        'lesson',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.ManyToOne)(() => registration_entity_1.Registration),
          tslib_1.__metadata(
            'design:type',
            typeof (_b =
              typeof registration_entity_1.Registration !== 'undefined' &&
              registration_entity_1.Registration) === 'function'
              ? _b
              : Object,
          ),
        ],
        StudentLesson.prototype,
        'registration',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({
            type: 'date',
            name: 'startDate',
            nullable: true,
          }),
          tslib_1.__metadata(
            'design:type',
            typeof (_c = typeof Date !== 'undefined' && Date) === 'function'
              ? _c
              : Object,
          ),
        ],
        StudentLesson.prototype,
        'startDate',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({
            type: 'date',
            name: 'endDate',
            nullable: true,
          }),
          tslib_1.__metadata(
            'design:type',
            typeof (_d = typeof Date !== 'undefined' && Date) === 'function'
              ? _d
              : Object,
          ),
        ],
        StudentLesson.prototype,
        'endDate',
        void 0,
      );
      exports.StudentLesson = StudentLesson = tslib_1.__decorate(
        [
          (0, typeorm_1.Entity)(),
          (0, typeorm_1.Unique)(['lesson', 'registration']),
        ],
        StudentLesson,
      );

      /***/
    },
    /* 39 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ClassroomMapper = void 0;
      const classroom_entity_1 = __webpack_require__(16);
      class ClassroomMapper {
        static toEntity(dto) {
          const entitie = new classroom_entity_1.Classroom();
          entitie.name = dto.name;
          return entitie;
        }
        static toResponse(e, progress) {
          return {
            id: e.course.id,
            name: e.course.name,
            description: e.course.description,
            enabled: e.enabled,
            startDate: e.startDate,
            progress: progress,
            endDate: null,
            teacher: {
              id: e.course?.teacher?.id,
              name: e.course?.teacher?.name,
            },
          };
        }
      }
      exports.ClassroomMapper = ClassroomMapper;

      /***/
    },
    /* 40 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a, _b, _c, _d;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.ClassroomCourser = void 0;
      const tslib_1 = __webpack_require__(5);
      const typeorm_1 = __webpack_require__(12);
      const course_entity_1 = __webpack_require__(34);
      const classroom_entity_1 = __webpack_require__(16);
      let ClassroomCourser = class ClassroomCourser {};
      exports.ClassroomCourser = ClassroomCourser;
      tslib_1.__decorate(
        [
          (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
          tslib_1.__metadata('design:type', String),
        ],
        ClassroomCourser.prototype,
        'id',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.ManyToOne)(() => classroom_entity_1.Classroom),
          tslib_1.__metadata(
            'design:type',
            typeof (_a =
              typeof classroom_entity_1.Classroom !== 'undefined' &&
              classroom_entity_1.Classroom) === 'function'
              ? _a
              : Object,
          ),
        ],
        ClassroomCourser.prototype,
        'classroom',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.ManyToOne)(() => course_entity_1.Course),
          tslib_1.__metadata(
            'design:type',
            typeof (_b =
              typeof course_entity_1.Course !== 'undefined' &&
              course_entity_1.Course) === 'function'
              ? _b
              : Object,
          ),
        ],
        ClassroomCourser.prototype,
        'course',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ default: false }),
          tslib_1.__metadata('design:type', Boolean),
        ],
        ClassroomCourser.prototype,
        'enabled',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({
            type: 'date',
            name: 'startDate',
            nullable: true,
          }),
          tslib_1.__metadata(
            'design:type',
            typeof (_c = typeof Date !== 'undefined' && Date) === 'function'
              ? _c
              : Object,
          ),
        ],
        ClassroomCourser.prototype,
        'startDate',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({
            type: 'date',
            name: 'endDate',
            nullable: true,
          }),
          tslib_1.__metadata(
            'design:type',
            typeof (_d = typeof Date !== 'undefined' && Date) === 'function'
              ? _d
              : Object,
          ),
        ],
        ClassroomCourser.prototype,
        'endDate',
        void 0,
      );
      exports.ClassroomCourser = ClassroomCourser = tslib_1.__decorate(
        [
          (0, typeorm_1.Entity)(),
          (0, typeorm_1.Unique)(['classroom', 'course']),
        ],
        ClassroomCourser,
      );

      /***/
    },
    /* 41 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CourseMapper = void 0;
      const lodash_1 = __webpack_require__(42);
      const course_entity_1 = __webpack_require__(34);
      class CourseMapper {
        static toEntity(dto) {
          const course = new course_entity_1.Course();
          (0, lodash_1.assign)(course, dto);
          course.lessons = course.lessons.map((lesson, index) => ({
            ...lesson,
            order: index + 1,
          }));
          return course;
        }
        static updateEntity(dto, course) {
          const updateCourse = new course_entity_1.Course();
          (0, lodash_1.assign)(updateCourse, dto);
          return {
            ...course,
            ...updateCourse,
            lessons: updateCourse.lessons.map((lesson, index) => ({
              ...lesson,
              order: index + 1,
            })),
          };
        }
        static toResponse(entity) {
          const response = {};
          console.log('toResponse', entity);
          response.id = entity.id;
          response.name = entity.name;
          response.description = entity.description;
          response.lessons = entity.lessons.map((lesson) => ({
            id: lesson.id,
            name: lesson.name,
            order: lesson.order,
            type: lesson.type,
            url: lesson.url,
          }));
          return response;
        }
      }
      exports.CourseMapper = CourseMapper;

      /***/
    },
    /* 42 */
    /***/ (module) => {
      module.exports = require('lodash');

      /***/
    },
    /* 43 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.LessonService = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const typeorm_1 = __webpack_require__(6);
      const typeorm_2 = __webpack_require__(12);
      const lesson_entity_1 = __webpack_require__(35);
      let LessonService = class LessonService {
        constructor(repository) {
          this.repository = repository;
        }
        async findOne(id) {
          const lesson = await this.repository.findOne({
            where: { id },
            relations: ['course'],
          });
          if (!lesson) throw new common_1.NotFoundException('Lesson not found');
          return lesson;
        }
      };
      exports.LessonService = LessonService;
      exports.LessonService = LessonService = tslib_1.__decorate(
        [
          (0, common_1.Injectable)(),
          tslib_1.__param(
            0,
            (0, typeorm_1.InjectRepository)(lesson_entity_1.Lesson),
          ),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_a =
              typeof typeorm_2.Repository !== 'undefined' &&
              typeorm_2.Repository) === 'function'
              ? _a
              : Object,
          ]),
        ],
        LessonService,
      );

      /***/
    },
    /* 44 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.StudentMapper = void 0;
      const tslib_1 = __webpack_require__(5);
      const bcrypt = tslib_1.__importStar(__webpack_require__(13));
      const student_entity_1 = __webpack_require__(14);
      class StudentMapper {
        static async toEntity(dto, classRoom) {
          const student = new student_entity_1.Student();
          student.name = dto.name;
          student.email = dto.email;
          student.password = await bcrypt.hash(dto.password, 10);
          student.classroom = classRoom;
          student.birthDate = dto.birthDate;
          return student;
        }
        static createStudentResponse(student) {
          return {
            id: student.id,
            name: student.name,
            email: student.email,
            birthDate: student.birthDate,
          };
        }
        static createRegistrationResponse(registration) {
          console.log('registration', registration);
          return {
            id: registration.course.id,
            name: registration.course.name,
            description: registration.course.description,
            startDate: registration.startDate,
            endDate: registration.endDate,
            progress: registration.progress,
            lessons: registration.course.lessons.map((lesson) => ({
              id: lesson.id,
              name: lesson.name,
              startDate: registration.lessons.find(
                (l) => l.lesson.id === lesson.id,
              )?.startDate,
              endDate: registration.lessons.find(
                (l) => l.lesson.id === lesson.id,
              )?.endDate,
              url: lesson.url,
              type: lesson.type.toString(),
            })),
          };
        }
      }
      exports.StudentMapper = StudentMapper;

      /***/
    },
    /* 45 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateClassroomDto = void 0;
      const tslib_1 = __webpack_require__(5);
      const swagger_1 = __webpack_require__(3);
      const class_validator_1 = __webpack_require__(20);
      class CreateClassroomDto {}
      exports.CreateClassroomDto = CreateClassroomDto;
      tslib_1.__decorate(
        [
          (0, swagger_1.ApiProperty)({
            description: 'The name of the classroom',
          }),
          (0, class_validator_1.IsString)(),
          (0, class_validator_1.IsNotEmpty)(),
          tslib_1.__metadata('design:type', String),
        ],
        CreateClassroomDto.prototype,
        'name',
        void 0,
      );

      /***/
    },
    /* 46 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a, _b, _c, _d, _e;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CourseController = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const get_classroom_1 = __webpack_require__(47);
      const get_sub_1 = __webpack_require__(48);
      const require_user_type_decorator_1 = __webpack_require__(26);
      const course_service_1 = __webpack_require__(32);
      const create_course_dto_1 = __webpack_require__(49);
      const courser_mapper_1 = __webpack_require__(41);
      let CourseController = class CourseController {
        constructor(courseService) {
          this.courseService = courseService;
        }
        async create(createCourseDto, userId) {
          await this.courseService.create(createCourseDto, userId);
        }
        async getById(id) {
          return courser_mapper_1.CourseMapper.toResponse(
            await this.courseService.findById(id),
          );
        }
        async update(id, updateCourse) {
          return await this.courseService.update(id, updateCourse);
        }
        async listAll(classroom, userId) {
          return await this.courseService.findAll(classroom, userId);
        }
      };
      exports.CourseController = CourseController;
      tslib_1.__decorate(
        [
          (0, common_1.Post)(),
          (0, require_user_type_decorator_1.RequireUserType)('teacher'),
          tslib_1.__param(0, (0, common_1.Body)()),
          tslib_1.__param(1, (0, get_sub_1.GetSub)()),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_b =
              typeof create_course_dto_1.CreateCourseDto !== 'undefined' &&
              create_course_dto_1.CreateCourseDto) === 'function'
              ? _b
              : Object,
            String,
          ]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        CourseController.prototype,
        'create',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Get)(':id'),
          tslib_1.__param(0, (0, common_1.Param)('id')),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [String]),
          tslib_1.__metadata(
            'design:returntype',
            typeof (_c = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _c
              : Object,
          ),
        ],
        CourseController.prototype,
        'getById',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Put)(':id'),
          (0, require_user_type_decorator_1.RequireUserType)('teacher'),
          tslib_1.__param(0, (0, common_1.Param)('id')),
          tslib_1.__param(1, (0, common_1.Body)()),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [
            String,
            typeof (_d =
              typeof create_course_dto_1.CreateCourseDto !== 'undefined' &&
              create_course_dto_1.CreateCourseDto) === 'function'
              ? _d
              : Object,
          ]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        CourseController.prototype,
        'update',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Get)(),
          (0, require_user_type_decorator_1.RequireUserType)('student'),
          tslib_1.__param(0, (0, get_classroom_1.GetClassroom)()),
          tslib_1.__param(1, (0, get_sub_1.GetSub)()),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [String, String]),
          tslib_1.__metadata(
            'design:returntype',
            typeof (_e = typeof Promise !== 'undefined' && Promise) ===
              'function'
              ? _e
              : Object,
          ),
        ],
        CourseController.prototype,
        'listAll',
        null,
      );
      exports.CourseController = CourseController = tslib_1.__decorate(
        [
          (0, common_1.Controller)('/api/course'),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_a =
              typeof course_service_1.CourseService !== 'undefined' &&
              course_service_1.CourseService) === 'function'
              ? _a
              : Object,
          ]),
        ],
        CourseController,
      );

      /***/
    },
    /* 47 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.GetClassroom = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const jwt = tslib_1.__importStar(__webpack_require__(28));
      const constants_1 = __webpack_require__(21);
      exports.GetClassroom = (0, common_1.createParamDecorator)(
        (_data, ctx) => {
          const request = ctx.switchToHttp().getRequest();
          const authHeader = request.headers['authorization'];
          if (!authHeader) {
            throw new common_1.UnauthorizedException(
              'Authorization header missing',
            );
          }
          const token = authHeader.split(' ')[1];
          let decoded;
          try {
            decoded = jwt.verify(token, constants_1.jwtConstants.secret);
          } catch (err) {
            throw new common_1.UnauthorizedException(
              'Invalid or expired token',
            );
          }
          return decoded.classroom;
        },
      );

      /***/
    },
    /* 48 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.GetSub = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const jwt = tslib_1.__importStar(__webpack_require__(28));
      const constants_1 = __webpack_require__(21);
      exports.GetSub = (0, common_1.createParamDecorator)((_data, ctx) => {
        const request = ctx.switchToHttp().getRequest();
        const authHeader = request.headers['authorization'];
        if (!authHeader) {
          throw new common_1.UnauthorizedException(
            'Authorization header missing',
          );
        }
        const token = authHeader.split(' ')[1];
        let decoded;
        try {
          decoded = jwt.verify(token, constants_1.jwtConstants.secret);
        } catch (err) {
          throw new common_1.UnauthorizedException('Invalid or expired token');
        }
        if (!decoded.sub) {
          throw new common_1.UnauthorizedException(
            'Classroom not found in token',
          );
        }
        return decoded.sub;
      });

      /***/
    },
    /* 49 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateCourseDto = void 0;
      const tslib_1 = __webpack_require__(5);
      const swagger_1 = __webpack_require__(3);
      const class_transformer_1 = __webpack_require__(19);
      const class_validator_1 = __webpack_require__(20);
      const create_lesson_dto_1 = __webpack_require__(50);
      class CreateCourseDto {}
      exports.CreateCourseDto = CreateCourseDto;
      tslib_1.__decorate(
        [
          (0, class_validator_1.IsString)(),
          (0, class_validator_1.MinLength)(2, {
            message: 'Name must have atleast 2 characters.',
          }),
          (0, class_validator_1.IsNotEmpty)(),
          (0, swagger_1.ApiProperty)({ description: 'The name' }),
          tslib_1.__metadata('design:type', String),
        ],
        CreateCourseDto.prototype,
        'name',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, class_validator_1.IsNotEmpty)(),
          (0, swagger_1.ApiProperty)({ description: 'Descrição' }),
          tslib_1.__metadata('design:type', String),
        ],
        CreateCourseDto.prototype,
        'description',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, class_validator_1.IsArray)(),
          (0, class_validator_1.ValidateNested)({ each: true }),
          (0, class_transformer_1.Type)(
            () => create_lesson_dto_1.CreateLessonDto,
          ),
          (0, swagger_1.ApiProperty)({
            description: 'List of lessons in the course',
            type: [create_lesson_dto_1.CreateLessonDto],
          }),
          tslib_1.__metadata('design:type', Array),
        ],
        CreateCourseDto.prototype,
        'lessons',
        void 0,
      );

      /***/
    },
    /* 50 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateLessonDto = void 0;
      const tslib_1 = __webpack_require__(5);
      const swagger_1 = __webpack_require__(3);
      const class_validator_1 = __webpack_require__(20);
      const lesson_entity_1 = __webpack_require__(35);
      class CreateLessonDto {}
      exports.CreateLessonDto = CreateLessonDto;
      tslib_1.__decorate(
        [
          (0, class_validator_1.IsString)(),
          (0, class_validator_1.MinLength)(2, {
            message: 'Name must have atleast 2 characters.',
          }),
          (0, class_validator_1.IsNotEmpty)(),
          (0, swagger_1.ApiProperty)({ description: 'The name' }),
          tslib_1.__metadata('design:type', String),
        ],
        CreateLessonDto.prototype,
        'name',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, class_validator_1.IsNotEmpty)(),
          (0, swagger_1.ApiProperty)({
            description: 'Type of lesson',
            enum: lesson_entity_1.LessonType,
          }),
          tslib_1.__metadata(
            'design:type',
            typeof (_a =
              typeof lesson_entity_1.LessonType !== 'undefined' &&
              lesson_entity_1.LessonType) === 'function'
              ? _a
              : Object,
          ),
        ],
        CreateLessonDto.prototype,
        'type',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, class_validator_1.IsString)(),
          (0, class_validator_1.IsNotEmpty)(),
          (0, class_validator_1.Matches)(
            /^(https?:\/\/)([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i,
            {
              message: 'Invalid URL format',
            },
          ),
          (0, swagger_1.ApiProperty)({ description: 'Lesson URL' }),
          tslib_1.__metadata('design:type', String),
        ],
        CreateLessonDto.prototype,
        'url',
        void 0,
      );

      /***/
    },
    /* 51 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.StudentController = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const get_classroom_1 = __webpack_require__(47);
      const require_user_type_decorator_1 = __webpack_require__(26);
      const student_mapper_1 = __webpack_require__(44);
      const student_service_1 = __webpack_require__(30);
      let StudentController = class StudentController {
        constructor(studentService) {
          this.studentService = studentService;
        }
        async getStudent(id) {
          const student = await this.studentService.findById(id);
          const courses = await this.studentService.getAllCourser(student);
          const response =
            student_mapper_1.StudentMapper.createStudentResponse(student);
          response.courses = courses;
          return response;
        }
        async checkCourser(id, idCouser, idClassRoom) {
          await this.studentService.checkCourse(id, idCouser, idClassRoom);
        }
        async checkLesson(id, idLesson) {
          await this.studentService.checkLesson(id, idLesson);
        }
        async finishLesson(id, idLesson) {
          await this.studentService.finishLesson(id, idLesson);
        }
        async getCourser(id, idCourser, idClassRoom) {
          const registration = await this.studentService.getCourser(
            id,
            idCourser,
            idClassRoom,
          );
          if (!registration) {
            throw new common_1.BadRequestException('Registration not found');
          }
          return student_mapper_1.StudentMapper.createRegistrationResponse(
            registration,
          );
        }
      };
      exports.StudentController = StudentController;
      tslib_1.__decorate(
        [
          (0, common_1.Get)('/:id'),
          tslib_1.__param(0, (0, common_1.Param)('id')),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [String]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        StudentController.prototype,
        'getStudent',
        null,
      );
      tslib_1.__decorate(
        [
          (0, require_user_type_decorator_1.RequireUserType)('student'),
          (0, common_1.Patch)('/:id/course/:idCourse/check'),
          tslib_1.__param(0, (0, common_1.Param)('id')),
          tslib_1.__param(1, (0, common_1.Param)('idCourse')),
          tslib_1.__param(2, (0, get_classroom_1.GetClassroom)()),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [String, String, Object]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        StudentController.prototype,
        'checkCourser',
        null,
      );
      tslib_1.__decorate(
        [
          (0, require_user_type_decorator_1.RequireUserType)('student'),
          (0, common_1.Patch)('/:id/lesson/:idLesson/check'),
          tslib_1.__param(0, (0, common_1.Param)('id')),
          tslib_1.__param(1, (0, common_1.Param)('idLesson')),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [String, String]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        StudentController.prototype,
        'checkLesson',
        null,
      );
      tslib_1.__decorate(
        [
          (0, require_user_type_decorator_1.RequireUserType)('student'),
          (0, common_1.Patch)('/:id/lesson/:idLesson/finish'),
          tslib_1.__param(0, (0, common_1.Param)('id')),
          tslib_1.__param(1, (0, common_1.Param)('idLesson')),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [String, String]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        StudentController.prototype,
        'finishLesson',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Get)('/:id/courser/:idCourser'),
          tslib_1.__param(0, (0, common_1.Param)('id')),
          tslib_1.__param(1, (0, common_1.Param)('idCourser')),
          tslib_1.__param(2, (0, get_classroom_1.GetClassroom)()),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [String, String, Object]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        StudentController.prototype,
        'getCourser',
        null,
      );
      exports.StudentController = StudentController = tslib_1.__decorate(
        [
          (0, common_1.Controller)('/api/student'),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_a =
              typeof student_service_1.StudentService !== 'undefined' &&
              student_service_1.StudentService) === 'function'
              ? _a
              : Object,
          ]),
        ],
        StudentController,
      );

      /***/
    },
    /* 52 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.FinancesModule = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const typeorm_1 = __webpack_require__(6);
      const finances_service_1 = __webpack_require__(53);
      const finances_controller_1 = __webpack_require__(58);
      const finances_seed_1 = __webpack_require__(63);
      const category_entity_1 = __webpack_require__(55);
      const transaction_entity_1 = __webpack_require__(57);
      const goal_entity_1 = tslib_1.__importDefault(__webpack_require__(56));
      let FinancesModule = class FinancesModule {};
      exports.FinancesModule = FinancesModule;
      exports.FinancesModule = FinancesModule = tslib_1.__decorate(
        [
          (0, common_1.Module)({
            imports: [
              typeorm_1.TypeOrmModule.forFeature([category_entity_1.Category]),
              typeorm_1.TypeOrmModule.forFeature([
                transaction_entity_1.Transaction,
              ]),
              typeorm_1.TypeOrmModule.forFeature([goal_entity_1.default]),
            ],
            controllers: [finances_controller_1.FinancesController],
            providers: [
              finances_service_1.FinancesService,
              finances_seed_1.FinancesSeed,
            ],
          }),
        ],
        FinancesModule,
      );

      /***/
    },
    /* 53 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a, _b, _c;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.FinancesService = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const typeorm_1 = __webpack_require__(6);
      const nestjs_typeorm_paginate_1 = __webpack_require__(31);
      const typeorm_2 = __webpack_require__(12);
      const number_utils_1 = __webpack_require__(54);
      const category_entity_1 = __webpack_require__(55);
      const goal_entity_1 = tslib_1.__importDefault(__webpack_require__(56));
      const transaction_entity_1 = __webpack_require__(57);
      let FinancesService = class FinancesService {
        constructor(transactionRepository, categoryRepository, goalRepository) {
          this.transactionRepository = transactionRepository;
          this.categoryRepository = categoryRepository;
          this.goalRepository = goalRepository;
        }
        async getCategories(type) {
          return this.categoryRepository.find({ where: { type } });
        }
        async getOverview(userId) {
          const incomeQuery = this.transactionRepository
            .createQueryBuilder('t')
            .select([
              'c.id AS categoryId',
              'c.description AS categoryName',
              'SUM(t.value) AS totalValue',
            ])
            .leftJoin('t.category', 'c')
            .where('t.studentId = :userId', { userId })
            .andWhere('t.type = :type', { type: 'income' })
            .groupBy('c.id');
          const expenseQuery = this.transactionRepository
            .createQueryBuilder('t')
            .select([
              'c.id AS categoryId',
              'c.description AS categoryName',
              'SUM(t.value) AS totalValue',
            ])
            .leftJoin('t.category', 'c')
            .where('t.studentId = :userId', { userId })
            .andWhere('t.type = :type', { type: 'expense' })
            .groupBy('c.id');
          const [incomes, expenses] = await Promise.all([
            incomeQuery.getRawMany(),
            expenseQuery.getRawMany(),
          ]);
          const totalIncome = incomes.reduce(
            (sum, item) => sum + Number(item.totalvalue),
            0,
          );
          const totalExpense = expenses.reduce(
            (sum, item) => sum + Number(item.totalvalue),
            0,
          );
          const incomeMonth = await this.getIncomeMonth(userId);
          const expenseMonth = await this.getExpenseMonth(userId);
          const totalMonth = incomeMonth - expenseMonth;
          return {
            amount: totalIncome - totalExpense,
            amountMonth: totalMonth,
            incomeMonth,
            expenseMonth,
            incomes: incomes.map((item) => ({
              category: {
                id: item.categoryid,
                description: item.categoryname,
                type: 'income',
              },
              value: Number(item.totalvalue),
            })),
            expenses: expenses.map((item) => ({
              category: {
                id: item.categoryid,
                description: item.categoryname,
                type: 'expense',
              },
              value: Number(item.totalvalue),
            })),
            totals: await this.resumeMonth(userId),
            balances: await this.resumeDiff(userId),
          };
        }
        async resumeMonth(userId) {
          const query = this.transactionRepository
            .createQueryBuilder('t')
            .select([
              "TO_CHAR(t.date, 'YYYY-MM') AS month",
              't.type AS type',
              'SUM(t.value) AS totalValue',
            ])
            .where('t.studentId = :userId', { userId })
            .andWhere(
              "t.date >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '5 months'",
            )
            .groupBy("TO_CHAR(t.date, 'YYYY-MM')")
            .addGroupBy('t.type')
            .orderBy("TO_CHAR(t.date, 'YYYY-MM')", 'ASC');
          const result = await query.getRawMany();
          return result.map((row) => ({
            month: row.month,
            value: (0, number_utils_1.round2)(Number(row.totalvalue)),
            type: row.type,
          }));
        }
        async resumeDiff(userId) {
          const query = this.transactionRepository
            .createQueryBuilder('t')
            .select([
              "TO_CHAR(t.date, 'YYYY-MM') AS month",
              't.type AS type',
              'SUM(t.value) AS totalValue',
            ])
            .where('t.studentId = :userId', { userId })
            .andWhere(
              "t.date >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '5 months'",
            )
            .groupBy("TO_CHAR(t.date, 'YYYY-MM')")
            .addGroupBy('t.type')
            .orderBy("TO_CHAR(t.date, 'YYYY-MM')", 'ASC');
          const result = await query.getRawMany();
          const monthMap = new Map();
          result.forEach((row) => {
            const month = row.month;
            const type = row.type;
            const value = Number(row.totalvalue) || 0;
            if (!monthMap.has(month)) {
              monthMap.set(month, { income: 0, expense: 0 });
            }
            const current = monthMap.get(month);
            if (type === 'income') {
              current.income += value;
            } else if (type === 'expense') {
              current.expense += value;
            }
          });
          const resumeDiff = Array.from(monthMap.entries()).map(
            ([month, { income, expense }]) => ({
              month,
              value: income - expense,
            }),
          );
          return resumeDiff;
        }
        async getIncomeMonth(userId) {
          const query = this.transactionRepository
            .createQueryBuilder('t')
            .select('SUM(t.value)', 'totalIncome')
            .where('t.studentId = :userId', { userId })
            .andWhere('t.type = :type', { type: 'income' })
            .andWhere(
              "DATE_TRUNC('month', t.date) = DATE_TRUNC('month', NOW())",
            );
          const result = await query.getRawOne();
          return Number(result.totalIncome) || 0;
        }
        async getExpenseMonth(userId) {
          const query = this.transactionRepository
            .createQueryBuilder('t')
            .select('SUM(t.value)', 'totalExpense')
            .where('t.studentId = :userId', { userId })
            .andWhere('t.type = :type', { type: 'expense' })
            .andWhere(
              "DATE_TRUNC('month', t.date) = DATE_TRUNC('month', NOW())",
            );
          const result = await query.getRawOne();
          return Number(result.totalExpense) || 0;
        }
        async getCategoryById(id) {
          const category = await this.categoryRepository.findOne({
            where: { id },
          });
          if (!category) {
            throw new Error(`Category with id ${id} not found`);
          }
          return category;
        }
        async createCategory(category) {
          const newCategory = this.categoryRepository.create(category);
          return this.categoryRepository.save(newCategory);
        }
        async createTransaction(userId, transaction) {
          const category = await this.getCategoryById(transaction.categoryId);
          if (!category) {
            throw new Error(
              `Category with id ${transaction.categoryId} not found`,
            );
          }
          const newTransaction = this.transactionRepository.create({
            ...transaction,
            category,
            student: { id: userId },
          });
          return this.transactionRepository.save(newTransaction);
        }
        async updateTransaction(userId, id, updateTransaction) {
          const transaction = await this.transactionRepository.findOne({
            where: {
              id,
              student: {
                id: userId,
              },
            },
          });
          if (!transaction) {
            throw new Error(`Transaction not found with id ${id}`);
          }
          if (updateTransaction.categoryId !== undefined) {
            const category = await this.getCategoryById(
              updateTransaction.categoryId,
            );
            if (!category) {
              throw new Error(
                `Category with id ${updateTransaction.categoryId} not found`,
              );
            }
            transaction.category = category;
          }
          const { categoryId, ...otherFields } = updateTransaction;
          Object.assign(transaction, otherFields);
          transaction.student = { id: userId };
          return this.transactionRepository.save(transaction);
        }
        async getTransactions(userId, filter, page, limit) {
          const applyFilters = (
            query,
            alias = 'transaction',
            actualFilter = filter,
          ) => {
            if (actualFilter.type) {
              query.andWhere(`${alias}.type = :type`, {
                type: actualFilter.type,
              });
            }
            if (actualFilter['start-date']) {
              query.andWhere(`${alias}.date >= :startDate`, {
                startDate: actualFilter['start-date'],
              });
            }
            if (actualFilter['end-date']) {
              query.andWhere(`${alias}.date <= :endDate`, {
                endDate: actualFilter['end-date'],
              });
            }
            return query;
          };
          const queryBuilder = this.transactionRepository
            .createQueryBuilder('transaction')
            .leftJoinAndSelect('transaction.category', 'category')
            .where('transaction.studentId = :userId', { userId })
            .orderBy('transaction.date', 'DESC');
          applyFilters(queryBuilder);
          const paginated = await (0, nestjs_typeorm_paginate_1.paginate)(
            queryBuilder,
            {
              page,
              limit,
            },
          );
          const resumeQuery = this.transactionRepository
            .createQueryBuilder('t')
            .select([
              "SUM(CASE WHEN t.type = 'income' THEN t.value ELSE 0 END) AS totalIncome",
              "SUM(CASE WHEN t.type = 'expense' THEN t.value ELSE 0 END) AS totalExpense",
            ])
            .where('t.studentId = :userId', { userId });
          filter.type = null;
          applyFilters(resumeQuery, 't', filter);
          const resumeRaw = await resumeQuery.getRawOne();
          const totalIncome = Number(resumeRaw['totalincome']) || 0;
          const totalExpense = Number(resumeRaw['totalexpense']) || 0;
          return {
            ...paginated,
            resume: {
              totalIncome,
              totalExpense,
              amount: totalIncome - totalExpense,
            },
          };
        }
        async deleteTransaction(userId, id) {
          const transaction = await this.transactionRepository.findOne({
            where: { id, student: { id: userId } },
          });
          if (!transaction) {
            throw new Error(`Transaction with id ${id} not found`);
          }
          await this.transactionRepository.remove(transaction);
        }
        async createGoal(userId, categoryId, value) {
          const category = await this.getCategoryById(categoryId);
          const goal = this.goalRepository.create({
            value,
            student: { id: userId },
            date: new Date(),
            category,
          });
          this.goalRepository.save(goal);
        }
        async getGoalInMonth(userId, type, page = 1, limit = 10) {
          const query = this.goalRepository
            .createQueryBuilder('goal')
            .leftJoinAndSelect('goal.category', 'category')
            .where('goal.studentId = :userId', { userId })
            .andWhere(
              "DATE_TRUNC('month', goal.date) = DATE_TRUNC('month', NOW())",
            );
          if (type) {
            query.andWhere('category.type = :type', { type });
          }
          const paginated = await (0, nestjs_typeorm_paginate_1.paginate)(
            query,
            {
              page,
              limit,
            },
          );
          return paginated;
        }
        async getProgressGoals(userId, filter, page = 1, limit = 10) {
          const query = this.goalRepository
            .createQueryBuilder('goal')
            .leftJoinAndSelect('goal.category', 'category')
            .where('goal.studentId = :userId', { userId });
          if (filter.type) {
            query.andWhere('category.type = :type', { type: filter.type });
          }
          const paginated = await (0, nestjs_typeorm_paginate_1.paginate)(
            query,
            {
              page,
              limit,
            },
          );
          const goalsProgress = await Promise.all(
            paginated.items.map(async (item) => {
              {
                const realizedFromCategory = await this.getValueFromCategory(
                  userId,
                  item.category.id,
                  filter['start-date'],
                  filter['end-date'],
                );
                return {
                  id: item.id,
                  category: {
                    id: item.category.id,
                    description: item.category.description,
                  },
                  realized: realizedFromCategory,
                  planed: (0, number_utils_1.round2)(Number(item.value)),
                  progress: (0, number_utils_1.round2)(
                    (realizedFromCategory / Number(item.value)) * 100,
                  ),
                  diff: (0, number_utils_1.round2)(
                    realizedFromCategory - Number(item.value),
                  ),
                };
              }
            }),
          );
          const totalGoals = await this.getSumOfGoals(userId, filter);
          const totalActual = await this.getTotal(userId, filter);
          return {
            ...paginated,
            items: goalsProgress,
            resume: {
              goals: (0, number_utils_1.round2)(totalGoals),
              actual: (0, number_utils_1.round2)(totalActual),
              diff: (0, number_utils_1.round2)(totalActual - totalGoals),
            },
          };
        }
        async getTotal(userId, filter) {
          const query = this.transactionRepository
            .createQueryBuilder('t')
            .select('SUM(t.value)', 'totalValue')
            .leftJoin('t.category', 'category')
            .where('t.studentId = :userId', { userId })
            .andWhere(
              "DATE_TRUNC('month', t.date) = DATE_TRUNC('month', NOW())",
            );
          if (filter.type) {
            query.andWhere('category.type = :type', { type: filter.type });
          }
          if (filter['start-date']) {
            query.andWhere('t.date >= :startDate', {
              startDate: filter['start-date'],
            });
          }
          if (filter['end-date']) {
            query.andWhere('t.date <= :endDate', {
              endDate: filter['end-date'],
            });
          }
          const result = await query.getRawOne();
          return Number(result.totalValue) || 0;
        }
        async getSumOfGoals(userId, filter) {
          const query = this.goalRepository
            .createQueryBuilder('goal')
            .select('SUM(goal.value)', 'totalValue')
            .leftJoin('goal.category', 'category')
            .where('goal.studentId = :userId', { userId });
          if (filter.type) {
            query.andWhere('category.type = :type', { type: filter.type });
          }
          const result = await query.getRawOne();
          return Number(result.totalValue) || 0;
        }
        async getValueFromCategory(userId, categoryId, startDate, endDate) {
          const query = this.transactionRepository
            .createQueryBuilder('t')
            .select('SUM(t.value)', 'totalValue')
            .where('t.studentId = :userId', { userId })
            .andWhere('t.categoryId = :categoryId', { categoryId });
          if (startDate) {
            query.andWhere('t.date >= :startDate', { startDate });
          }
          if (endDate) {
            query.andWhere('t.date <= :endDate', { endDate });
          }
          const result = await query.getRawOne();
          return Number(result.totalValue) || 0;
        }
        async deleteGoal(userId, id) {
          const goal = await this.goalRepository.findOne({
            where: { id, student: { id: userId } },
          });
          if (!goal) {
            throw new Error(`Transaction with id ${id} not found`);
          }
          await this.goalRepository.remove(goal);
        }
      };
      exports.FinancesService = FinancesService;
      exports.FinancesService = FinancesService = tslib_1.__decorate(
        [
          (0, common_1.Injectable)(),
          tslib_1.__param(
            0,
            (0, typeorm_1.InjectRepository)(transaction_entity_1.Transaction),
          ),
          tslib_1.__param(
            1,
            (0, typeorm_1.InjectRepository)(category_entity_1.Category),
          ),
          tslib_1.__param(
            2,
            (0, typeorm_1.InjectRepository)(goal_entity_1.default),
          ),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_a =
              typeof typeorm_2.Repository !== 'undefined' &&
              typeorm_2.Repository) === 'function'
              ? _a
              : Object,
            typeof (_b =
              typeof typeorm_2.Repository !== 'undefined' &&
              typeorm_2.Repository) === 'function'
              ? _b
              : Object,
            typeof (_c =
              typeof typeorm_2.Repository !== 'undefined' &&
              typeorm_2.Repository) === 'function'
              ? _c
              : Object,
          ]),
        ],
        FinancesService,
      );

      /***/
    },
    /* 54 */
    /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.round2 = void 0;
      function round2(value) {
        return Number(value.toFixed(2));
      }
      exports.round2 = round2;

      /***/
    },
    /* 55 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Category = void 0;
      const tslib_1 = __webpack_require__(5);
      const typeorm_1 = __webpack_require__(12);
      let Category = class Category {};
      exports.Category = Category;
      tslib_1.__decorate(
        [
          (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
          tslib_1.__metadata('design:type', String),
        ],
        Category.prototype,
        'id',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ type: 'varchar', length: 30 }),
          tslib_1.__metadata('design:type', String),
        ],
        Category.prototype,
        'description',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ type: 'enum', enum: ['income', 'expense'] }),
          tslib_1.__metadata('design:type', String),
        ],
        Category.prototype,
        'type',
        void 0,
      );
      exports.Category = Category = tslib_1.__decorate(
        [(0, typeorm_1.Entity)()],
        Category,
      );

      /***/
    },
    /* 56 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a, _b, _c;
      Object.defineProperty(exports, '__esModule', { value: true });
      const tslib_1 = __webpack_require__(5);
      const typeorm_1 = __webpack_require__(12);
      const student_entity_1 = __webpack_require__(14);
      const category_entity_1 = __webpack_require__(55);
      let Goal = class Goal {};
      tslib_1.__decorate(
        [
          (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
          tslib_1.__metadata('design:type', String),
        ],
        Goal.prototype,
        'id',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
          tslib_1.__metadata('design:type', Number),
        ],
        Goal.prototype,
        'value',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ type: 'date' }),
          tslib_1.__metadata(
            'design:type',
            typeof (_a = typeof Date !== 'undefined' && Date) === 'function'
              ? _a
              : Object,
          ),
        ],
        Goal.prototype,
        'date',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.ManyToOne)(() => category_entity_1.Category),
          tslib_1.__metadata(
            'design:type',
            typeof (_b =
              typeof category_entity_1.Category !== 'undefined' &&
              category_entity_1.Category) === 'function'
              ? _b
              : Object,
          ),
        ],
        Goal.prototype,
        'category',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.ManyToOne)(() => student_entity_1.Student),
          tslib_1.__metadata(
            'design:type',
            typeof (_c =
              typeof student_entity_1.Student !== 'undefined' &&
              student_entity_1.Student) === 'function'
              ? _c
              : Object,
          ),
        ],
        Goal.prototype,
        'student',
        void 0,
      );
      Goal = tslib_1.__decorate([(0, typeorm_1.Entity)()], Goal);
      exports['default'] = Goal;

      /***/
    },
    /* 57 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a, _b, _c;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.Transaction = void 0;
      const tslib_1 = __webpack_require__(5);
      const typeorm_1 = __webpack_require__(12);
      const student_entity_1 = __webpack_require__(14);
      const category_entity_1 = __webpack_require__(55);
      let Transaction = class Transaction {};
      exports.Transaction = Transaction;
      tslib_1.__decorate(
        [
          (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
          tslib_1.__metadata('design:type', String),
        ],
        Transaction.prototype,
        'id',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
          tslib_1.__metadata('design:type', String),
        ],
        Transaction.prototype,
        'description',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.ManyToOne)(() => student_entity_1.Student),
          tslib_1.__metadata(
            'design:type',
            typeof (_a =
              typeof student_entity_1.Student !== 'undefined' &&
              student_entity_1.Student) === 'function'
              ? _a
              : Object,
          ),
        ],
        Transaction.prototype,
        'student',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
          tslib_1.__metadata('design:type', Number),
        ],
        Transaction.prototype,
        'value',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ type: 'date' }),
          tslib_1.__metadata(
            'design:type',
            typeof (_b = typeof Date !== 'undefined' && Date) === 'function'
              ? _b
              : Object,
          ),
        ],
        Transaction.prototype,
        'date',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.Column)({ type: 'varchar', length: 30 }),
          tslib_1.__metadata('design:type', String),
        ],
        Transaction.prototype,
        'type',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, typeorm_1.ManyToOne)(() => category_entity_1.Category),
          tslib_1.__metadata(
            'design:type',
            typeof (_c =
              typeof category_entity_1.Category !== 'undefined' &&
              category_entity_1.Category) === 'function'
              ? _c
              : Object,
          ),
        ],
        Transaction.prototype,
        'category',
        void 0,
      );
      exports.Transaction = Transaction = tslib_1.__decorate(
        [(0, typeorm_1.Entity)()],
        Transaction,
      );

      /***/
    },
    /* 58 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.FinancesController = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const swagger_1 = __webpack_require__(3);
      const express_1 = __webpack_require__(59);
      const get_sub_1 = __webpack_require__(48);
      const create_transaction_dto_1 = __webpack_require__(60);
      const filter_transaction_dto_1 = __webpack_require__(61);
      const finances_mapper_1 = __webpack_require__(62);
      const finances_service_1 = __webpack_require__(53);
      let FinancesController = class FinancesController {
        constructor(financesService) {
          this.financesService = financesService;
        }
        async getCategories(type) {
          const categories = await this.financesService.getCategories(type);
          return finances_mapper_1.FinancesMapper.mapCategories(categories);
        }
        async createTransaction(res, userId, body) {
          await this.financesService.createTransaction(userId, body);
          res.status(common_1.HttpStatus.CREATED).send();
        }
        async updateTransaction(res, userId, body, id) {
          await this.financesService.updateTransaction(userId, id, body);
          res.status(common_1.HttpStatus.NO_CONTENT).send();
        }
        async deleteTransaction(res, userId, id) {
          await this.financesService.deleteTransaction(userId, id);
          res.status(common_1.HttpStatus.NO_CONTENT).send();
        }
        async getTransactions(userId, page, limit, filter) {
          return await this.financesService.getTransactions(
            userId,
            filter,
            page,
            limit,
          );
        }
        async getOverview(userId) {
          return await this.financesService.getOverview(userId);
        }
        async getCategoryIncomeById(id) {
          const category = await this.financesService.getCategoryById(id);
          return finances_mapper_1.FinancesMapper.mapCategory(category);
        }
        async getCategoryExpenseById(id) {
          const category = await this.financesService.getCategoryById(id);
          return finances_mapper_1.FinancesMapper.mapCategory(category);
        }
        async createGoal(userId, body, res) {
          console.log('Creating goal', body);
          await this.financesService.createGoal(
            userId,
            body.categoryId,
            body.value,
          );
          res.status(common_1.HttpStatus.CREATED).send();
        }
        async getGoals(userId, type, filter) {
          filter.type = type;
          return await this.financesService.getProgressGoals(userId, filter);
        }
        async deleteGoal(res, userId, id) {
          await this.financesService.deleteGoal(userId, id);
          res.status(common_1.HttpStatus.NO_CONTENT).send();
        }
      };
      exports.FinancesController = FinancesController;
      tslib_1.__decorate(
        [
          (0, common_1.Get)(':type/categories'),
          (0, swagger_1.ApiParam)({
            name: 'type',
            enum: ['expense', 'income'],
            description:
              'Tipo de categoria: "expense" para despesas, "income" para receitas',
          }),
          tslib_1.__param(0, (0, common_1.Param)('type')),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [String]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        FinancesController.prototype,
        'getCategories',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Post)(),
          (0, swagger_1.ApiBody)({
            type: create_transaction_dto_1.CreateTransactionDto,
          }),
          tslib_1.__param(0, (0, common_1.Res)()),
          tslib_1.__param(1, (0, get_sub_1.GetSub)()),
          tslib_1.__param(2, (0, common_1.Body)()),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_b =
              typeof express_1.Response !== 'undefined' &&
              express_1.Response) === 'function'
              ? _b
              : Object,
            String,
            typeof (_c =
              typeof create_transaction_dto_1.CreateTransactionDto !==
                'undefined' &&
              create_transaction_dto_1.CreateTransactionDto) === 'function'
              ? _c
              : Object,
          ]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        FinancesController.prototype,
        'createTransaction',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Put)(':id'),
          (0, swagger_1.ApiBody)({
            type: create_transaction_dto_1.CreateTransactionDto,
          }),
          tslib_1.__param(0, (0, common_1.Res)()),
          tslib_1.__param(1, (0, get_sub_1.GetSub)()),
          tslib_1.__param(2, (0, common_1.Body)()),
          tslib_1.__param(3, (0, common_1.Param)('id')),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_d =
              typeof express_1.Response !== 'undefined' &&
              express_1.Response) === 'function'
              ? _d
              : Object,
            String,
            typeof (_e =
              typeof create_transaction_dto_1.CreateTransactionDto !==
                'undefined' &&
              create_transaction_dto_1.CreateTransactionDto) === 'function'
              ? _e
              : Object,
            String,
          ]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        FinancesController.prototype,
        'updateTransaction',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Delete)(':id'),
          (0, swagger_1.ApiParam)({
            name: 'id',
            description: 'ID da transação',
          }),
          tslib_1.__param(0, (0, common_1.Res)()),
          tslib_1.__param(1, (0, get_sub_1.GetSub)()),
          tslib_1.__param(2, (0, common_1.Param)('id')),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_f =
              typeof express_1.Response !== 'undefined' &&
              express_1.Response) === 'function'
              ? _f
              : Object,
            String,
            String,
          ]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        FinancesController.prototype,
        'deleteTransaction',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Get)(),
          (0, swagger_1.ApiBody)({
            type: create_transaction_dto_1.CreateTransactionDto,
          }),
          tslib_1.__param(0, (0, get_sub_1.GetSub)()),
          tslib_1.__param(3, (0, common_1.Query)()),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [
            String,
            Number,
            Number,
            typeof (_g =
              typeof filter_transaction_dto_1.FilterTransactionDto !==
                'undefined' &&
              filter_transaction_dto_1.FilterTransactionDto) === 'function'
              ? _g
              : Object,
          ]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        FinancesController.prototype,
        'getTransactions',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Get)('overview'),
          tslib_1.__param(0, (0, get_sub_1.GetSub)()),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [String]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        FinancesController.prototype,
        'getOverview',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Get)('/income/:id'),
          tslib_1.__param(0, (0, common_1.Param)('id')),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [String]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        FinancesController.prototype,
        'getCategoryIncomeById',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Get)('/expense/:id'),
          tslib_1.__param(0, (0, common_1.Param)('id')),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [String]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        FinancesController.prototype,
        'getCategoryExpenseById',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Post)('/goals'),
          tslib_1.__param(0, (0, get_sub_1.GetSub)()),
          tslib_1.__param(1, (0, common_1.Body)()),
          tslib_1.__param(2, (0, common_1.Res)()),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [
            String,
            Object,
            typeof (_h =
              typeof express_1.Response !== 'undefined' &&
              express_1.Response) === 'function'
              ? _h
              : Object,
          ]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        FinancesController.prototype,
        'createGoal',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Get)('/goals/:type'),
          (0, swagger_1.ApiParam)({
            name: 'type',
            enum: ['expense', 'income'],
            description:
              'Tipo de categoria: "expense" para despesas, "income" para receitas',
          }),
          tslib_1.__param(0, (0, get_sub_1.GetSub)()),
          tslib_1.__param(1, (0, common_1.Param)('type')),
          tslib_1.__param(2, (0, common_1.Query)()),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [
            String,
            String,
            typeof (_j =
              typeof filter_transaction_dto_1.FilterTransactionDto !==
                'undefined' &&
              filter_transaction_dto_1.FilterTransactionDto) === 'function'
              ? _j
              : Object,
          ]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        FinancesController.prototype,
        'getGoals',
        null,
      );
      tslib_1.__decorate(
        [
          (0, common_1.Delete)('/goals/:id'),
          (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da meta' }),
          tslib_1.__param(0, (0, common_1.Res)()),
          tslib_1.__param(1, (0, get_sub_1.GetSub)()),
          tslib_1.__param(2, (0, common_1.Param)('id')),
          tslib_1.__metadata('design:type', Function),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_k =
              typeof express_1.Response !== 'undefined' &&
              express_1.Response) === 'function'
              ? _k
              : Object,
            String,
            String,
          ]),
          tslib_1.__metadata('design:returntype', Promise),
        ],
        FinancesController.prototype,
        'deleteGoal',
        null,
      );
      exports.FinancesController = FinancesController = tslib_1.__decorate(
        [
          (0, common_1.Controller)('/api/finances'),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_a =
              typeof finances_service_1.FinancesService !== 'undefined' &&
              finances_service_1.FinancesService) === 'function'
              ? _a
              : Object,
          ]),
        ],
        FinancesController,
      );

      /***/
    },
    /* 59 */
    /***/ (module) => {
      module.exports = require('express');

      /***/
    },
    /* 60 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.CreateTransactionDto = void 0;
      const tslib_1 = __webpack_require__(5);
      const swagger_1 = __webpack_require__(3);
      const class_validator_1 = __webpack_require__(20);
      class CreateTransactionDto {}
      exports.CreateTransactionDto = CreateTransactionDto;
      tslib_1.__decorate(
        [
          (0, swagger_1.ApiProperty)({ example: 'Almoço no restaurante' }),
          (0, class_validator_1.IsString)(),
          tslib_1.__metadata('design:type', String),
        ],
        CreateTransactionDto.prototype,
        'description',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, swagger_1.ApiProperty)({ example: 52.5 }),
          (0, class_validator_1.IsNumber)(),
          tslib_1.__metadata('design:type', Number),
        ],
        CreateTransactionDto.prototype,
        'value',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, swagger_1.ApiProperty)({ example: '2025-05-24' }),
          (0, class_validator_1.IsDateString)(),
          tslib_1.__metadata('design:type', String),
        ],
        CreateTransactionDto.prototype,
        'date',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, swagger_1.ApiProperty)({
            enum: ['expense', 'income'],
            example: 'expense',
          }),
          (0, class_validator_1.IsEnum)(['expense', 'income']),
          tslib_1.__metadata('design:type', String),
        ],
        CreateTransactionDto.prototype,
        'type',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, class_validator_1.IsString)(),
          (0, swagger_1.ApiProperty)({
            example: 'dsf8a9b0-4c3e-4b2d-8f5e-1a2b3c4d5e6f',
          }),
          tslib_1.__metadata('design:type', String),
        ],
        CreateTransactionDto.prototype,
        'categoryId',
        void 0,
      );

      /***/
    },
    /* 61 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a, _b;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.FilterTransactionDto = void 0;
      const tslib_1 = __webpack_require__(5);
      const class_transformer_1 = __webpack_require__(19);
      const class_validator_1 = __webpack_require__(20);
      class FilterTransactionDto {}
      exports.FilterTransactionDto = FilterTransactionDto;
      tslib_1.__decorate(
        [
          (0, class_validator_1.IsOptional)(),
          (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
          tslib_1.__metadata(
            'design:type',
            typeof (_a = typeof Date !== 'undefined' && Date) === 'function'
              ? _a
              : Object,
          ),
        ],
        FilterTransactionDto.prototype,
        'start-date',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, class_validator_1.IsOptional)(),
          (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
          tslib_1.__metadata(
            'design:type',
            typeof (_b = typeof Date !== 'undefined' && Date) === 'function'
              ? _b
              : Object,
          ),
        ],
        FilterTransactionDto.prototype,
        'end-date',
        void 0,
      );
      tslib_1.__decorate(
        [
          (0, class_validator_1.IsOptional)(),
          (0, class_validator_1.IsString)(),
          tslib_1.__metadata('design:type', String),
        ],
        FilterTransactionDto.prototype,
        'type',
        void 0,
      );

      /***/
    },
    /* 62 */
    /***/ (__unused_webpack_module, exports) => {
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.FinancesMapper = void 0;
      class FinancesMapper {
        static mapCategories(categories) {
          return categories.map(this.mapCategory);
        }
        static mapCategory(category) {
          return {
            id: category.id,
            name: category.name,
            description: category.description,
          };
        }
      }
      exports.FinancesMapper = FinancesMapper;

      /***/
    },
    /* 63 */
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      var _a, _b;
      Object.defineProperty(exports, '__esModule', { value: true });
      exports.FinancesSeed = void 0;
      const tslib_1 = __webpack_require__(5);
      const common_1 = __webpack_require__(1);
      const typeorm_1 = __webpack_require__(6);
      const typeorm_2 = __webpack_require__(12);
      const finances_service_1 = __webpack_require__(53);
      const category_entity_1 = __webpack_require__(55);
      let FinancesSeed = class FinancesSeed {
        constructor(financesService, categoryRepository) {
          this.financesService = financesService;
          this.categoryRepository = categoryRepository;
        }
        async onModuleInit() {
          await this.seed();
        }
        async seed() {
          await this.seedCategory({
            id: '35ee31ea-cbb3-4d89-a3e0-b58230172689',
            description: 'Comida',
            type: 'expense',
          });
          await this.seedCategory({
            id: '48022b04-7c8d-4197-a1cd-5f72bb6ee6e2',
            description: 'Transporte',
            type: 'expense',
          });
          await this.seedCategory({
            id: '1c673fbd-a444-4622-8627-630f32743f61',
            description: 'Salário',
            type: 'income',
          });
          await this.seedCategory({
            id: '6a2a3961-aea5-4e1c-b20f-3c1c4b5c8502',
            description: 'Freelancer',
            type: 'income',
          });
        }
        async seedCategory(category) {
          try {
            await this.financesService.getCategoryById(category.id);
            console.log(
              `Categoria "${category.description}" (${category.type}) já existe.`,
            );
          } catch {
            await this.categoryRepository.save(category);
            console.log(
              `Categoria "${category.description}" (${category.type}) criada.`,
            );
          }
        }
      };
      exports.FinancesSeed = FinancesSeed;
      exports.FinancesSeed = FinancesSeed = tslib_1.__decorate(
        [
          (0, common_1.Injectable)(),
          tslib_1.__param(
            1,
            (0, typeorm_1.InjectRepository)(category_entity_1.Category),
          ),
          tslib_1.__metadata('design:paramtypes', [
            typeof (_a =
              typeof finances_service_1.FinancesService !== 'undefined' &&
              finances_service_1.FinancesService) === 'function'
              ? _a
              : Object,
            typeof (_b =
              typeof typeorm_2.Repository !== 'undefined' &&
              typeorm_2.Repository) === 'function'
              ? _b
              : Object,
          ]),
        ],
        FinancesSeed,
      );

      /***/
    },
    /******/
  ];
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
  (() => {
    var exports = __webpack_exports__;

    /**
     * This is not a production server yet!
     * This is only a minimal backend to get started.
     */
    Object.defineProperty(exports, '__esModule', { value: true });
    const common_1 = __webpack_require__(1);
    const core_1 = __webpack_require__(2);
    const swagger_1 = __webpack_require__(3);
    const app_module_1 = __webpack_require__(4);
    async function bootstrap() {
      const app = await core_1.NestFactory.create(app_module_1.AppModule);
      app.useGlobalPipes(new common_1.ValidationPipe());
      const port = process.env.PORT || 3000;
      // TODO: Validate cors config
      app.enableCors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
      });
      const config = new swagger_1.DocumentBuilder()
        .setTitle('Api Monetix')
        .setDescription('Api for Monetix project')
        .setVersion('1.0')
        .build();
      app.use(async (req, res, next) => {
        try {
          next();
        } catch (error) {
          console.error('Error handling request:', error);
          res.status(500).send('Internal Server Error');
        }
      });
      const documentFactory = () =>
        swagger_1.SwaggerModule.createDocument(app, config);
      swagger_1.SwaggerModule.setup('api', app, documentFactory);
      await app.listen(port);
      common_1.Logger.log(
        `🚀 Application is running on: http://localhost:${port}/`,
      );
    }
    bootstrap();
  })();

  /******/
})();
