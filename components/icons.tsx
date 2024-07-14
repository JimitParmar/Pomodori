import React from 'react';
import type { SVGProps } from 'react';

export function Play(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="2.4em" height="2.4em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="#6D7DFE" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.89 12.846c-.353 1.343-2.023 2.292-5.364 4.19c-3.23 1.835-4.845 2.752-6.146 2.384a3.25 3.25 0 0 1-1.424-.841C5 17.614 5 15.743 5 12s0-5.614.956-6.579a3.25 3.25 0 0 1 1.424-.84c1.301-.37 2.916.548 6.146 2.383c3.34 1.898 5.011 2.847 5.365 4.19a3.3 3.3 0 0 1 0 1.692" color="currentColor"></path></svg>);
}


export function Next(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.935 12.626c-.254 1.211-1.608 2.082-4.315 3.822c-2.945 1.893-4.417 2.84-5.61 2.475a2.8 2.8 0 0 1-1.088-.635C4 17.418 4 15.612 4 12s0-5.418.922-6.288a2.8 2.8 0 0 1 1.089-.635c1.192-.365 2.664.582 5.609 2.475c2.707 1.74 4.06 2.61 4.315 3.822c.087.412.087.84 0 1.252M20 5v14" color="currentColor"></path></svg>);
}

export function Repeat(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m16.388 3l1.003.976c.448.436.672.654.593.839C17.906 5 17.59 5 16.955 5h-7.76C5.22 5 2 8.134 2 12c0 1.487.477 2.866 1.29 4m4.322 5l-1.003-.976c-.448-.436-.672-.654-.593-.839C6.094 19 6.41 19 7.045 19h7.76C18.78 19 22 15.866 22 12a6.84 6.84 0 0 0-1.29-4" color="currentColor"></path></svg>);
}

export function Pause(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="2.4em" height="2.4em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="#6D7DFE" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7c0-1.414 0-2.121.44-2.56C4.878 4 5.585 4 7 4s2.121 0 2.56.44C10 4.878 10 5.585 10 7v10c0 1.414 0 2.121-.44 2.56C9.122 20 8.415 20 7 20s-2.121 0-2.56-.44C4 19.122 4 18.415 4 17zm10 0c0-1.414 0-2.121.44-2.56C14.878 4 15.585 4 17 4s2.121 0 2.56.44C20 4.878 20 5.585 20 7v10c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44s-2.121 0-2.56-.44C14 19.122 14 18.415 14 17z" color="currentColor"></path></svg>);
}