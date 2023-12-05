# CSS-Theme

一组前端主题样式变量

## Usage/Examples

引入 `js` 变量
```javascript
import defaultTheme from '@ihccc/css-theme';

console.log(defaultTheme.colorPrimary);
```

引入 `css` 变量
```css
import '@ihccc/css-theme/dist/default.css';
```

## Run Locally

Clone the project

```bash
  git clone https://ihccc-site
```

Go to the project directory

```bash
  cd utils
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm run dev
```

## 变量表

- `css` 变量命名规则 `--{大类}-{名称}-{状态/类型/尺寸}`：`--color-primary`, `--color-text`, `--color-text-disabled`, `--size-margin-small`；
- `js` 变量名称就是 `css` 变量的名称，去掉 `--` 前缀，并转换为驼峰命名: `colorPrimary`, `colorText`, `colorTextDisabled`, `sizeMarginSmall`

文本色

| 变量名                 | 描述         |
| :--------------------- | :----------- |
| `colorPrimary`         | 主色         |
| `colorText`            | 默认文本     |
| `colorTextDesc`        | 描述文本     |
| `colorTextLight`       | 轻量文本     |
| `colorTextPlaceholder` | 占位文本     |
| `colorTextDisabled`    | 禁用文本     |
| `colorTextError`       | 错误文本     |
| `colorTextWarning`     | 警告文本     |
| `colorTextSuccess`     | 成功文本     |
| `colorTextInfo`        | 信息文本     |
| `colorTextHover`       | 悬浮高亮文本 |
| `colorTextActive`      | 点击高亮文本 |
| `colorTextFocus`       | 聚焦高亮文本 |

背景色

| 变量名               | 描述         |
| :------------------- | :----------- |
| `colorBgLayout`      | 布局背景     |
| `colorBgComponent`   | 组件背景     |
| `colorBgSecondary`   | 辅助背景     |
| `colorBgContainer`   | 容器背景     |
| `colorBgDesc`        | 描述背景     |
| `colorBgLight`       | 轻量背景     |
| `colorBgPlaceholder` | 占位背景     |
| `colorBgDisabled`    | 禁用背景     |
| `colorBgError`       | 错误背景     |
| `colorBgWarning`     | 警告背景     |
| `colorBgSuccess`     | 成功背景     |
| `colorBgInfo`        | 信息背景     |
| `colorBgHover`       | 悬浮高亮背景 |
| `colorBgActive`      | 点击高亮背景 |
| `colorBgFocus`       | 聚焦高亮背景 |

边框色

| 变量名                | 描述           |
| :-------------------- | :------------- |
| `colorBorder`         | 边框色         |
| `colorBorderDisabled` | 禁用边框色     |
| `colorBorderError`    | 错误边框色     |
| `colorBorderWarning`  | 警告边框色     |
| `colorBorderSuccess`  | 成功边框色     |
| `colorBorderInfo`     | 信息边框色     |
| `colorBorderHover`    | 悬浮高亮边框色 |
| `colorBorderActive`   | 点击高亮边框色 |
| `colorBorderFocus`    | 聚焦高亮边框色 |

阴影色


| 变量名              | 描述         |
| :------------------ | :----------- |
| `colorShadow`       | 阴影         |
| `colorShadowHover`  | 悬浮高亮阴影 |
| `colorShadowActive` | 点击高亮阴影 |
| `colorShadowFocus`  | 聚焦高亮阴影 |

尺寸

| 变量名                  | 描述           |
| :---------------------- | :------------- |
| `sizeFont`              | 默认字体尺寸   |
| `sizeFontTitle`         | 标题字体小尺寸 |
| `sizeFontDesc`          | 描述字体尺寸   |
| `sizeFontP`             | 字体P尺寸      |
| `sizeFontH6`            | 字体H6尺寸     |
| `sizeFontH5`            | 字体H5尺寸     |
| `sizeFontH4`            | 字体H4尺寸     |
| `sizeFontH3`            | 字体H3尺寸     |
| `sizeFontH2`            | 字体H2尺寸     |
| `sizeFontH1`            | 字体H1尺寸     |
| `sizeMargin`            | 外边距         |
| `sizeMarginSmall`       | 外边距         |
| `sizeMarginLarge`       | 外边距         |
| `sizePadding`           | 内边距         |
| `sizePaddingSmall`      | 内边距         |
| `sizePaddingLarge`      | 内边距         |
| `sizeBorderWidth`       | 边框宽度       |
| `sizeBorderWidthSmall`  | 边框宽度       |
| `sizeBorderWidthLarge`  | 边框宽度       |
| `sizeBorderRadius`      | 圆角宽度       |
| `sizeBorderRadiusSmall` | 圆角           |
| `sizeBorderRadiusLarge` | 圆角           |
| `sizeFontWeight`        | 字粗           |
| `sizeFontWeightSmall`   | 字粗           |
| `sizeFontWeightLarge`   | 字粗           |

样式

| 变量名 | 描述 |
| :----- | :--- |
| `font` | 字体 |

## License

[MIT](https://choosealicense.com/licenses/mit/)

