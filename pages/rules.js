import React from "react";

const RuleHeading = ({ children }) => {
    return (
        <div className="text-xl font-bold mt-2">
            {children}
        </div>
    );
};

const RuleDetails = ({ children }) => {
    return (
        <li className="ml-6">
            {children}
        </li>
    );
};

const rules = () => {
  return (
    <div>
      <main className="mx-auto w-full sm:w-9/12 lg:w-7/12 px-4 mt-4">
        <h2 className="text-2xl font-bold">Rules</h2>
        <div>We follow the <a className="underline text-primary hover:text-secondary" href="https://www.internationalpokerrules.com/poker-rules/" target="_blank" rel="noreferrer">International Poker Rules.</a> with no notable exceptions.</div>
        <div>Please have a read at your leisure!</div>
        <RuleHeading>
            Dealers
        </RuleHeading>
        <div>
            Dealers are also players. We assign dedicated dealers to each table to provide a better experience to the players, to manage the hands and to ensure fair play. Therefore, there are a number of rules that all players should be aware of.
        </div>
        <ul className="list-disc my-2">
            <RuleDetails>Dealers will ensure fair play and will enforce rulings. Any player has a right to dispute this ruling and can do so by calling the floor (this will just be another dealer so use sparingly but should definitely be used in the event the dealer is also in the disputed hand)</RuleDetails>
            <RuleDetails>No 2 dealers shall be assigned to the same table, they are removed from the seat draw. As tables are broken, dealers may retire and join another table.</RuleDetails>
            <RuleDetails>Dealers cannot be moved due to table balancing. In the event a dealer should move, the player to his left will move instead.</RuleDetails>
            <RuleDetails>At the start of the tournament, the dealer button is decided by high card.</RuleDetails>
            <RuleDetails>At the final table, if more than 1 dealer still remains in the tournament, the one with the highest stack is assigned dealer. If he/she is eliminated, then another active dealer may take over.</RuleDetails>
            <RuleDetails>Dealers will shuffle and offer the cut to the dealer button. To prevent disputes, players must cut the deck and at least 5 from the top.</RuleDetails>
            <RuleDetails>Dealers receive reduced entry to the tournament of up to &pound;30. This applies only to the entrance fee, rebuys and addons are not discounted.</RuleDetails>
            <RuleDetails>If you can deal and would like to join our pool of dealers, please make this known! We are always on the lookout for more!</RuleDetails>
        </ul>

        <RuleHeading>
            Payouts
        </RuleHeading>
            
        <RuleHeading>
            Table Balancing
        </RuleHeading>

        Blinds go up dealers first rifle.

      </main>
    </div>
  );
};

export default rules;
