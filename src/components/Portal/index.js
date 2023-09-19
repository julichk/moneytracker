import  ReactDOM  from "react-dom";
import { useEffect, useMemo } from "react";

const parent = document.getElementById("modal")

export const Portal = ({children}) => {

  const el = useMemo(() => document.createElement('div'), []);

  useEffect(()=> {
    parent.appendChild(el);

    return () => {
      parent.removeChild(el);
    }
  }, [])

  return ReactDOM.createPortal(
    children,
    el,
    document.getElementById("modal")
  )
};
