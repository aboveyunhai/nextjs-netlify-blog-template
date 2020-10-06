type Props = {
  active: boolean;
  onClick: () => void;
};
export default function Burger({ active, onClick }: Props) {
  return (
    <div className={"container " + (active ? "active" : "")} onClick={onClick}>
      <div className="nav-icon">
        <div className={"meat meat-1"} />
        <div className={"meat meat-2"} />
        <div className={"meat meat-3"} />
      </div>
      <style jsx>
        {`
          .container {
            position: sticky;
            width: 100%;
            height: 46px;
            cursor: pointer;
            z-index: 2;
            display: flex;
            transition: all 500ms;
          }
          .meat {
            position: absolute;
            width: 28px;
            height: 2px;
            background: #9b9b9b;
            top: calc(50%);
            left: calc(28px);
            transition: all 150ms ease-in;
          }
          .meat-1 {
            transform: translateY(-10px);
          }
          .meat-2 {
            width: calc(28px - 6px);
          }
          .meat-3 {
            transform: translateY(10px);
          }
          .active .meat-1 {
            transform: rotate(45deg);
          }
          .active .meat-2 {
            opacity: 0;
          }
          .active .meat-3 {
            transform: rotate(-45deg);
          }

          @media (min-width: 769px) {
            .container {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
}
