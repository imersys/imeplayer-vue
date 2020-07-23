
# Ime Player Vue component


## Installation

```bash
npm run build
```

## Usage

### API

- **Description:** Add a Ime Player iframe.
- **Usage:**

```js
...
<template>
  <div>
    <vrplayer :video-id="'363788003'"></vrplayer>
  </div>
</template>
...
```

- **Description:** Add a Ime Player poster "thumbnail" image only, not calling any of the actual player's.
- **Usage:**


```js
<template>
  <div>
    <vrplayer :video-id="'363788003'" poster-only></vrplayer>
  </div>
</template>
```

### Props

| Prop        | Type(s)        | Default | Description                                              |
| ----------- | -------------- | ------- | -------------------------------------------------------- |
| poster-only      | Boolean        | false   | TODO |


## License

[MIT](http://opensource.org/licenses/MIT)
