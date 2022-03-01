interface Rect {
    readonly id: string;
    color?: string;
    size: {
        width: number;
        height: number;
    }
}
const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}
const rect2: Rect = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    },
}
rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{}

// ====================

interface RectWithArea extends Rect {
    getArea: () => number;
}
const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 10,
        height: 5
    },
    getArea(): number {
        return this.size.whidth * this.size.height;
    }
}

// ======================
interface IClock {
    time: Date;
    setTime(date: Date): void;
}

class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date;
    }
}

// ======================
// Иногда нам нужно создать интерфейс, в котором будет много динамических ключей, но бывает, что их слишком много, поэтому есть ещё такая конструкция - 
// в квадратных скобках мы указываем тип ключа. Есть ключевое слово key, для которого мы указываем тип string, и значение по ключу будет тоже string
interface Styles {
    [key: string]: string;
}
const css = {
    border: '1px solid black',
    marginTop: '2px', 
    borderRadius: '5px'
}
