import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter"

import { NextApiHandler } from "next";
import { PrismaClient } from "@prisma/client";
import Email from "next-auth/providers/email";

const prisma = new PrismaClient();

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    Email({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.SMTP_FROM,
    }),
  ],
  adapter: PrismaAdapter(prisma),

  secret: process.env.SECRET,
};