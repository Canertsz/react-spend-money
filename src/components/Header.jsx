import { formatMoney } from '../helpers/formatMoney.js';

export default function Header({ money }) {
    return (
        <header
            className="sticky top-0 flex justify-center items-center bg-green-400 h-12 text-2xl">
            you have -<b>{formatMoney(money)}</b>- to spend
        </header>
    )
}