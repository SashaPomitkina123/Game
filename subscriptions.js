
class Subscription {
    constructor(user, plan) {
        this.user = user;
        this.plan = plan; // 'free', 'premium', etc.
    }

    displaySubscriptionInfo() {
        console.log(`${this.user.username}'s Subscription Plan: ${this.plan}`);
    }
}

module.exports = Subscription;
