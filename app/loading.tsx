import "./loading.scss";

export default function Loading() {
  return (
    <div className="skeleton">
      <div className="skeleton__animation skeleton__header"></div>
      <hr />
      <div className="skeleton__animation skeleton__text"></div>
      <div className="skeleton__animation skeleton__text"></div>
      <div className="skeleton__buttons">
        <div className="skeleton__animation skeleton__button"></div>
        <div className="skeleton__animation skeleton__button"></div>
        <div className="skeleton__animation skeleton__button"></div>
      </div>
      <div className="skeleton__animation skeleton__images"></div>
    </div>
  );
}
