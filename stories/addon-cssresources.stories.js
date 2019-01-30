// Import from @storybook/X where X is your framework
import { configure, addDecorator, storiesOf } from '@storybook/html';
import { withCssResources } from '@storybook/addon-cssresources';

// global
addDecorator(
  withCssResources({
    cssresources: [{
        name: `bluetheme`,
        code: `<style> body { background-color: lightblue; }</style>`,
        picked: false,
      },
    ],
  })
);

// per story
storiesOf('Addons|Cssresources', module)
  .addDecorator(
    withCssResources({
      cssresources: [{
          name: `fontawesome`,
          code: `<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>`,
          picked: true,
        }, {
          name: `whitetheme`,
          code: `<style> .fa { color: #fff }</style>`,
          picked: true,
        },
        {
            name: `bluetheme`,
            code: `<style> body { background-color: lightblue; }</style>`,
            picked: false,
          }
      ],
    })
  )
  .add('Camera Icon', () => '<i class="fa fa-camera-retro"> Camera Icon</i>');
