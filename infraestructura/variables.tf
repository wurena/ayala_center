variable "region" {
  description = "Azure region."
  default = "Central US"
}

variable "resourceGroup" {
  description = "Azure Resource group name."
  default = "ayalaCenterRG"
}

variable "lbName" {
  description = "Azure Lad Balancer name."
  default = "ayalaLB"
}

variable "geo_replication" {
  type = "list"
  description = "Geo replication regions"
  default = ["East US", "West Europe"]
}
