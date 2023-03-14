import {
  HvProvider,
  createTheme,
  HvTypography,
} from "@hitachivantara/uikit-react-core";

const newTheme = createTheme({
  name: "myTheme",
  base: "ds5",
  inheritColorModes: false,
  colors: {
    modes: {
      sand: {
        backgroundColor: "#EAE7DC",
        sema1: "#738f54",
        sema2: "#7699b8",
        sema3: "#d9905f",
        sema4: "#bf6060",
        sema7: "#a4aeba",
        sema8: "#b2bda6",
        sema9: "#d19090",
        acce2: "#536f8f",
        acce2h: "#76a6db",
      },
    },
  },
  fontFamily: {
    body: "Courier New",
  },
});

export const CreateTheme = () => {
  const id = "hv-root-create-theme-myTheme-sand-color-mode";
  return (
    <div id={id}>
      <HvProvider
        rootElementId={id}
        themes={[newTheme]}
        theme="myTheme"
        colorMode="sand"
      >
        <HvTypography>Hello from the UI Kit team!</HvTypography>
      </HvProvider>
    </div>
  );
};
