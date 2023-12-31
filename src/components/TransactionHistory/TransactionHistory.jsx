import css from './TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <table className={css.transactions}>
      <thead>
        <tr className={`${css.title} ${css.item}`}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id} className={css.transData}>
              <td className={css.item}>{item.type}</td>
              <td className={css.item}>{item.amount}</td>
              <td className={css.item}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
