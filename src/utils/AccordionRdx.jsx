import React from 'react';
// import { Accordion } from "radix-ui";
// import {
//     Accordion,
//     AccordionItem,
//     AccordionTrigger,
//     AccordionContent
// } from '@radix-ui/react-accordion';
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import './AccordionRdx.css';


const AccordionRdx = () => (
    <Accordion.Root
        className="AccordionRoot"
        type="single"
        defaultValue="item-1"
        collapsible
    >
        <Accordion.Item className="AccordionItem" value="item-1">
            <AccordionTrigger>
                Best interest rates on the market
            </AccordionTrigger>
            <AccordionContent>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
            </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-2">
            <AccordionTrigger>
                Prevent unstable prices
            </AccordionTrigger>
            <AccordionContent>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
            </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-3">
            <AccordionTrigger>
                Best price on the market
            </AccordionTrigger>
            <Accordion.Content className="AccordionContent">
                <div className="AccordionContentText">
                    Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
                </div>
            </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-4">
            <AccordionTrigger>
                Best interest rates on the market
            </AccordionTrigger>
            <AccordionContent>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
            </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-5">
            <AccordionTrigger>
                Prevent unstable prices
            </AccordionTrigger>
            <AccordionContent>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
            </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-6">
            <AccordionTrigger>
                Best price on the market
            </AccordionTrigger>
            <Accordion.Content className="AccordionContent">
                <div className="AccordionContentText">
                    Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
                </div>
            </Accordion.Content>
        </Accordion.Item>
    </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
        <Accordion.Header className="AccordionHeader">
            <Accordion.Trigger
                className={classNames("AccordionTrigger", className)}
                {...props}
                ref={forwardedRef}
            >
                {children}
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
            </Accordion.Trigger>
        </Accordion.Header>
    ),
);

const AccordionContent = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
        <Accordion.Content
            className={classNames("AccordionContent", className)}
            {...props}
            ref={forwardedRef}
        >
            <div className="AccordionContentText">{children}</div>
        </Accordion.Content>
    ),
);

export default AccordionRdx;