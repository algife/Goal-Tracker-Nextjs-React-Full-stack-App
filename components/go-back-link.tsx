import Link from "next/link";

// --------------------

export default function GoBackLink() {
  return (
    <Link className="link go-back-link" href="../">
      &laquo; Go Back
    </Link>
  );
}
