import { ArrowIcon } from './ArrowIcon';

export const Connect = () => {
  return (
    <ul className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
      <li>
        <a
          className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.deendevelopers.com/"
        >
          <ArrowIcon />
          <p className="h-7 ml-2">deen developers</p>
        </a>
      </li>
      <li>
        <a
          className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/umarrgora"
        >
          <ArrowIcon />
          <p className="h-7 ml-2">twitter</p>
        </a>
      </li>
      <li>
        <a
          className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/umar-gora-34a810a7/"
        >
          <ArrowIcon />
          <p className="h-7 ml-2">linkedin</p>
        </a>
      </li>
    </ul>
  );
};
