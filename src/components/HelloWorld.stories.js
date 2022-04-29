import HelloWorld from './HelloWorld.vue';

export default {
  title: 'HelloWorld',
  component: HelloWorld,
};

export const HelloWorldWithProps = (args, { argTypes }) => ({
  components: { HelloWorld },
  template: '<HelloWorld />',
});
