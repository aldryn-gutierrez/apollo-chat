import React, { ReactElement, useEffect, useState } from "react";

const ClientOnly = ({
  children,
}: {
  children: React.ReactNode;
}): ReactElement => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <></>;
  }

  return <div>{children}</div>;
};

export default ClientOnly;
