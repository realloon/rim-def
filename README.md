# rim-def

Rim-def 为开发 **RimWorld Mod** 所设计，编程式地声明 `Defs`、`Patches` 和 `About`。

为何需要编程式声明，而不是手写 xml？因为我们需要成员提示、代码补全和类型检查，依托于现代编辑器的智能感知，rim-def 实现了这一切。

Rim-def 旨在提升开发者的人体工程学体验和幸福指数。

## 如何使用

Rim-def 是一个 TypeScript 模块，发布在 npm 仓库，因此我们通过包管理工具安装 rim-def。

检查清单：

1. 当前电脑已经在 [Node.js](https://nodejs.org/en) 安装了 node 和 npm；
2. 已经正确配置了 npm 源；
3. 当前目录位于你所新建的文件夹；
4. 你完整的阅读了这份清单。

在终端中输入下面的命令：

```sh
npm install rim-def
```

>  这同样适用于 yarn、pnpm 和 bun。

安装依赖后，新建 `.ts` 文件，从 `rim-def` 导入所需，我们以 `defineGun` 为例：

```ts
/* src/index.ts */
import { defineGun } from 'rim-def'

const rifle = defineGun('Namespace_Custom_Rifle')
rifle.label('custom rifle')
```

`defineGun` 接受 `defName` 参数，它应包含命名空间。

实例 `rifle` 上有着我们需要用到的各种声明函数，借助编辑器的智能感知以了解更多。