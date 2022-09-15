import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryDataBase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            { id: 1, name: 'Moradia', description: 'Pagamentos de contas da casa' },
            { id: 2, name: 'Saúde', description: 'Plano de saúde e remédios' },
            { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc.' },
            { id: 4, name: 'Salário', description: 'Recebimentos de salário' },
            { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer' },
        ];

        const entries: Entry[] = [
            { id: 1, name: 'Gás de cozinha', categoryId: categories[0].id, category: categories[0], paid: true, date: '14/10/2021', amount: '70,80', type: 'expense', description: 'Conta de gás' } as Entry,
            { id: 2, name: 'Suplementos', categoryId: categories[1].id, category: categories[1], paid: false, date: '15/10/2021', amount: '135,90', type: 'expense', description: 'Suplementos alimentares' } as Entry,
            { id: 3, name: 'Cinema', categoryId: categories[2].id, category: categories[2], paid: true, date: '16/10/2021', amount: '25,99', type: 'expense', description: 'Ingresso Cinemark' } as Entry,
            { id: 4, name: 'Salário empresa X', categoryId: categories[3].id, category: categories[3], paid: false, date: '17/10/2021', amount: '12500,00', type: 'revenue', description: 'Salário mensal' } as Entry,
            { id: 5, name: 'Freelance projeto Y', categoryId: categories[4].id, category: categories[4], paid: true, date: '18/10/2021', amount: '750,00', type: 'revenue', description: 'Projeto Y' } as Entry,
            { id: 6, name: 'Salário empresa Y', categoryId: categories[3].id, category: categories[3], paid: false, date: '19/10/2021', amount: '9000,00', type: 'revenue', description: 'Salário mensal' } as Entry,
            { id: 7, name: 'Mensalidade Tênis', categoryId: categories[2].id, category: categories[2], paid: true, date: '20/10/2021', amount: '285,00', type: 'expense', description: 'Mensalidade clube' } as Entry,
            { id: 8, name: 'Plano de saúde', categoryId: categories[1].id, category: categories[1], paid: true, date: '21/10/2021', amount: '425,00', type: 'expense', description: 'Plano de saúde X' } as Entry,
            { id: 9, name: 'Aluguel', categoryId: categories[0].id, category: categories[0], paid: false, date: '22/10/2021', amount: '2760,00', type: 'expense', description: 'Aluguel do apartamento' } as Entry,
            { id: 10, name: 'Academia', categoryId: categories[1].id, category: categories[1], paid: true, date: '23/10/2021', amount: '99,00', type: 'expense', description: 'Academia X' } as Entry
        ]

        return { categories,  entries };
    }
}
