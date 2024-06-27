import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

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

  await prisma.aluno.deleteMany();
  const mauro = await prisma.aluno.create({
    data: {
      nome: "Mauro",
      finalizacao: new Date(),
      localderesidencia: "Brasil",
      status: "Em andamento"
    }
  })

  await prisma.turmaemandamento.deleteMany();
  await prisma.professor.deleteMany();

  const bruno = await prisma.professor.create({
    data: {
      nome: "Bruno",
      localderesidencia: "Brasil",
      especilidade: "Guitarra",
      finalizacao: new Date(),
      status: "Em andamento"

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
