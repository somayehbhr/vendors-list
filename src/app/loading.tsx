import Spinner from "@/components/Spinner";

/**
 * `Loading` is a React component that displays a loading spinner.
 *
 * @component
 * @example
 * return <Loading />;
 *
 * @description
 * This component imports and uses the `Spinner` component from "@/components/Spinner". The `Spinner` component is responsible for displaying a loading spinner.
 *
 * The `Loading` component returns a `div` HTML element that wraps the `Spinner` component. This structure allows for additional components or content to be easily added alongside the `Spinner` in the future.
 */
export default function Loading() {
  return (
    <div>
      <Spinner />
    </div>
  );
}
