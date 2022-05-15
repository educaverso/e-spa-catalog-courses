import "@mdi/font/css/materialdesignicons.min.css";

export default (props: { name: string }) => (
  <i class={["mdi", `mdi-${props.name}`, "icon"]} ></i>
);
