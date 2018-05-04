import { enableProdMode,ApplicationRef  } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//导入热重载需要的文件
import { hmrBootstrap } from './hmr';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  //在浏览器平台上面启动根模块
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

if (environment.hmr) {
  //开启热更新
  if (module['hot']) {
    hmrBootstrap(module, bootstrap);
  } else {
    // 未加上 --hmr 时，控制台会有错误提醒
    console.error('HMR没有启用，确保 ng server 命令加上 --hmr 标记');
  }
} else {
  //直接启动，没有热更新
  bootstrap();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));
