import Link from "next/link";
import { TSlugParams } from "../../types";
import "./image-modal.scss";

const ImageModal = ({ slug }: TSlugParams) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <Link className="homeLink" href={`project-details/${slug}`}>
          <span className="close">&times;</span>
        </Link>
      </div>
    </div>
  );
};

export default ImageModal;
