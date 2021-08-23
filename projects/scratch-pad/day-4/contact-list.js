// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
        var contactObj = {
            id: id,
            nameFirst: nameFirst,
            nameLast: nameLast,
        }
    return contactObj;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; //=> empty array to store contacts
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        //addConcct function using push method to add contact to contacts arr//
        addContact: function(contactObj) {
            return contacts.push(contactObj);
        },
        /* findContact function using for loop to pull full name into new var contactCard 
            - then if statement contact card matches full name argue return result of contact obj */
        findContact: function(fullName) {
            var result;
            for(var i = 0; i < contacts.length; i++){
            var contactCard = contacts[i];
            var contactCardFullName = `${contactCard.nameFirst} ${contactCard.nameLast}`
            if(contactCardFullName === fullName){
                result = contactCard
            };
            };
             return result;
        },
        //removedContact function using pop method to remove contact from array//
        removeContact: function(contactObj) {
            return contacts.pop();
        },
        /*printAllContactNames function storing results in empty string. Then run for loop to iterate through contacts, but if
        contact is last contact, result returns just full name, no new line. Else return all full names with new line break after each */
        printAllContactNames: function(){
            var result = ''
            for(var i = 0; i < contacts.length; i++){
            var fullName = `${contacts[i].nameFirst} ${contacts[i].nameLast}`;
            if(contacts.length - 1 === i){
                result += `${fullName}`;
            } else {
                result += `${fullName}\n`;
            }
            }
            return result;
        }
    };
}


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
