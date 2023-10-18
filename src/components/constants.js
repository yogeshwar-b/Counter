// Transition Time out in milliseconds
export const TransitionDuration = 400;
// List of Transitions for Transition Select list
export const TransitionList = [
  {
    name: "None",
    transitiondata: {
      entering: {
        opacity: 1,
      },
      entered: { opacity: 1 },
      exiting: {
        opacity: 0,
      },
      exited: { opacity: 0 },
    },
  },
  {
    name: "Fade",
    transitiondata: {
      entering: {
        opacity: 1,
        transition: `opacity ${TransitionDuration}ms ease-in`,
      },
      entered: { opacity: 1 },
      exiting: {
        opacity: 0,
        transition: `opacity ${TransitionDuration}ms ease-out`,
      },
      exited: { opacity: 0 },
    },
  },
];
