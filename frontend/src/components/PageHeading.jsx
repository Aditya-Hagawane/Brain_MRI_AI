
function PageHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="page-heading">

      <span className="eyebrow">
        {eyebrow}
      </span>

      <h1>{title}</h1>

      <p>{subtitle}</p>

    </div>
  );
}

export default PageHeading;
