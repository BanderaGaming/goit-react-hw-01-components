import css from "./Statistics.module.css";


export function Statistics({ stats, title }) {
  return <section className={css.stats}>
    {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>
        {stats.map((item, id) => {
      return <li className={css.listItem} key={id}>
        <span className=''>{item.label} </span>
        <span className=''>{item.percentage}%</span>
    </li> })}
  </ul>
</section> 
};