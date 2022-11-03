export interface CardProps {
    id: number,
    image: string,
    text: string,
    date: number,
    lesson_num: number,
    title: string,
    author: number,
    className?: string,
}

export interface Cards {
    cards: CardProps[]
}