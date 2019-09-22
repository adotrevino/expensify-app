import moment from 'moment'

export default [
    {
        id:'1',
        description: 'computer',
        note: '',
        amount: 195,
        createdAt:0

    },
    {
        id:'2',
        description: 'mouse',
        note: '',
        amount: 999,
        createdAt: moment(0).subtract(4, 'days').valueOf()

    },
    {
        id:'3',
        description: 'soda',
        note: '',
        amount: 2999,
        createdAt:moment(0).add(4, 'days').valueOf()

    }


]