import { IExeptionFilter } from './errors/exeption.filter.interface';
import { TYPES } from './types';
import { Container, ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { IConfigService } from './config/config.service.interface';
import { IHelloController } from './controllers/hello/hello.controller.interface';
import { ILogger } from './logger/logger.interface';
import { LoggerService } from './logger/loggerService';
import { HelloController } from './controllers/hello/hello.controller';
import { ExeptionFilter } from './errors/exeption.filter';
import { ConfigService } from './config/config.service';
import { HelloService } from './services/hello/hello.service';
import { IHelloService } from './services/hello/hello.service.interface';

const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<IHelloService>(TYPES.HelloService).to(HelloService).inSingletonScope();
	bind<IHelloController>(TYPES.HelloController).to(HelloController).inSingletonScope();
	bind<ILogger>(TYPES.Logger).to(LoggerService).inSingletonScope();
	bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter).inSingletonScope();
	bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
	bind<App>(TYPES.Application).to(App);
});

function bootstrap() {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	app.init();
}

bootstrap();
