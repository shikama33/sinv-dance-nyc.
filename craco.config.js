// Configuración mínima. Solo existe para que "@/" apunte a la carpeta src/
// (por ejemplo: import { Nav } from "@/components/sinv/Nav").
const path = require("path");

module.exports = {
  webpack: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
};
