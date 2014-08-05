# Uuid

Server that returns an UUID, based on ExpressJS.

## Why?!

There are many servers out there doing way to many complex things. Sometimes the only thing you need is a unique number for your system. This is a server that gives you a unique number. You are allowed to do with it whatever you want, but it will be a unique number that you will never get again from this server.

Regarding scalability... The server is quite slow and will not be made faster. If you need to have fast unique numbers you will have to roll your own solution. Regarding the scalability of the number of unique numbers we can send out, the answer will be very pleasing. We have an infinite number of UUIDs that are ready waiting for you to pick them up.

## Usage

There is a working demo at:

[uuid.herokuapp.com](http://uuid.herokuapp.com/uuid)

And of course you should actually only use the one REST call that matters.

    curl -X GET http://uuid.herokuapp.com/uuid

The result will astonish you... :-)

## FAQ

* Q: I lost my number, can you get it for me?

> A: No


* Q: I want a specific number, can I get it?

> A: Try


* Q: Are you sure the same number is not handed out twice?

> A: Yes, if the semaphore in findAndModify in mongo is implemented correctly by the developers


* Q: How many UUIDs can I get?

> A: As many as you want


* Q: Is this better than bitcoin?

> A: Huh?


* Q: Will you get rich?

> A: Yes, if you give me money, and especially if you give a lot of money


* Q: What's the uptime of your system?

> A: On the moment this is an AND operation on the uptime of Heroku and the uptime of MongoLab that I am not qualified to perform


* Q: Will the UUID be positive?

> A: Yes


* Q: Will the UUID fit it a 128-bit register?

> A: Depends on how much you guys like it


* Q: Are you a genius?

> A: No, you can do this as well


* Q: What did you use for this?

> A: Check the code on [https://github.com/mrquincle/uuidjs](https://github.com/mrquincle/uuidjs)


* Q: Shouldn't you go to bed?

> A: Yes


## Copyrights

* Author: Anne van Rossum
* License: LGPLv3
* Copyrights: me

