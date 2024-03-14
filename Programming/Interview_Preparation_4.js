/* Why should I prepare for System Design?
1. Many companies have now started to add system design rounds in their
   interview round.
2. In this round the interviewer seeks to know whether the candidate
   has the ability to build an application or not.
3. When it comes to building an application the concept here is very
   different with Data Structure and Algorithms.
4. It involves knowledge on various design principles and patterns which
   we are going to discuss.
   
Q) What is asked in System Design?
-> The main agenda of the system design round is to check whether the
   candidate has the ability to build an application or know the
   principles of designing an application.
-> This is very important to know when someone works in an IT company
   where data structure and algorithms do not come directly into the 
   picture but having the knowledge on how the application works.
   Knowledge on APIs, databases, connections like HTTP protocols.
-> System Design covers all of this and to work in IT companies these
   kinds of qualities or knowledge on candidates are frequently checked.
-> Because at the end of the day we are not only writing algorithms or
   doing 10 problems daily on LeetCode or GeeksForGeeks but we are
   actually here creating applications and solving customers issues in
   real time.
   
Q) How to prepare for the system design round?
-> Let's now understand what are all the important factors we need to 
   look at while preparing system design interview?
-> These are the broad classifications of all the topics we should
   know before going for a system design interview.
   
Requirement Gathering : What is to be developed?
-> Requirement Gathering in this section mainly focuses on what are the
   requirements of customers, what needs ti be developed and ideas on
   what needs to be implemented.
-> It's basically done by the project manager of a team.

Scope : Prioritize the requirement
-> Scope or in the other since we can say prioritizing the requirements
   in this section we basically create a list of all the functional and
   non-functional requirements which needs to be implemented in the
   application.
-> Functional requirements are teh requirements which directly address the
   customers. For example, if a customer wants us to build an Ecommerce
   application one of the functional requirements will be to search for
   products, add any product to the card or buy the product and so on.
-> Whereas non-functional requirements are not directly asked from
   customers but something which needs to be addresses like the 
   application speed, security maintainability and performance of the 
   application.
-> Scoping and prioritizing requirements are mostly done by the manager
   or architect of the team.
   
Infrastructure estimation: computation, storage and network
-> This section basically covers the infrastructure requirements of what
   kind of storage, what kind of network and what all the different
   kinds of computations we require.
-> It is also called the hardware requirements estimation for application.
-> This estimation is mainly done by the architect or senior engineer
   of the team.
   
HLD (High Level Design) :
-> The high level design of any application looks when we sit on the top
   of the application and see how different components are, so it 
   basically covers what all the TechStack and Components are required
   to build the application.
-> How these components communicate with each other, what kind of API
   signatures should be created for any component in the application.
-> The high level design is mainly doen by the architect or senior
   engineer of the team.
   
LLD (Low Level Design)
-> Indifferent from high level design a low level design is when we 
   actually go inside a component and look for the actual implementation,
   how this component should be implemented, what all the classes and
   entities are required.
-> The mapping of different attribute of different entities and correlation
   between each other basically constitutes the low level design of an
   application.
-> This is done by the senior engineers or entry level engineers of the
   company.
   
Actual Implementation :
-> All the above mentioned tasks are completed. This is where we actually
   go down to implement an application and write its codes.
   
Testing Deployment :
-> In this section we actually create the testing and the deployment 
   scripts for the newly written codes.
   
Monitoring and Maintenance :
-> After completion of testing and deployments the main focus is on
   monitoring and maintaining the application.
-> This is mostly done by the SRE of the team. Site Reliability Engineers
   whose responsibilities will be frequently check the health of the 
   application and look for any errors or any issue if happening and 
   convey the message to the developers.

What is the Design Principle ?
-> These are the basic design models and principles which one must follow
   to create or design an application which is easy to extend, maintain,
   maintain, understand and modify easily.

SOLID Principle :
-> So, as you have already guessed the name SOLID itself is an acronym
   where -
   (a) S - Single Responsibility Principle
   (b) O - Open-closed Principle
   (c) L - Liskov Substitution Principle
   (d) I - Interface Segregation Principle
   (e) D - Dependency Inversion Principle
-> So, basically all these 5 principles are meant to make Object-Oriented
   plus Designing easy to read, extend and maintain.

Design Pattern -
-> Design Patterns was given by 4 great enginners who were experts in
   object-oriented programming and principles, the team was known as
   Big4 where they published a paper which container around 12 to 13
   patterns or creation of objects, behavior of objects and structuring
   of objects.
-> The different types of scenarios are considered and one or many other
   way while designing our applications this pattern comes handy for us
   learning by our mistakes we can follow up these principles and patterns
   and make a robust application.
   */ 