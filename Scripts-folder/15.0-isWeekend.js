export function isWeekend(today)
{
        const day=today.format('dddd');
        return day==='Saturday' || day==='Sunday';
}

export default isWeekend;