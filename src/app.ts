import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

// import routers
//! import routers here

export async function CreateApp()
{
   const app = express();
   const staticPath: string = path.join(process.cwd(), "public");
   
   // middlewares
   app.use(express.json());

   // routers
   //! use routers here
   
   const vite = await createViteServer({
      root: path.join(staticPath),
      server: { middlewareMode: true },
   });

   // vite middleware
   app.use(vite.middlewares);
   
   // static
   app.use("/", express.static(staticPath));
   app.use("/", (request, response) => {
      response.sendFile(staticPath);
   });

   return app;
}