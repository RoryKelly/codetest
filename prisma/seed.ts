import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()
import { faker } from '@faker-js/faker';

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

async function main() {
    for (let i = 0; i < 100; i++) {
        let user = await prisma.user.create({
            data: {
                email: faker.internet.email(),
                name: faker.name.fullName()
            }
        })
        for (let i = 0; i < (1 + getRandomInt(10)); i++) {
            let todo = await prisma.todo.create({
                data: {
                    authorId: user.id,
                    text: faker.lorem.text()
                }
            })
        }
    }
}

main()
