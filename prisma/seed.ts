import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { BrushIcon } from "lucide-react";

const prisma = new PrismaClient();

async function seed() {
  const email = "rachel@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  const guittarCategory = await prisma.categoria.create({
    data: {
      nome: "Violão"
    }
  })

  const drumsCategory = await prisma.categoria.create({
    data: {
      nome: "Bateria"
    }
  })

  const mauro = await prisma.aluno.create({
    data: {
      nome: "Mauro"
    }
  })

  const bruno = await prisma.professor.create({
    data: {
      nome: "Bruno"
    }
  })

  await prisma.turmaemandamento.create({
    data: {
      nomedaturma: "Bruno",
      alunos: { connect: [{ id: mauro.id }] },
      professor: { connect: { id: bruno.id } },
      finalizacao: new Date(),
      categorias: {
        connect: [
          { id: drumsCategory.id },
          { id: guittarCategory.id },
        ]
      }
    }
  })

  console.log(`Database has been seeded. 🌱`);
}



seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
