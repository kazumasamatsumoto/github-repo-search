import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Star, GitFork, Eye, CircleDot } from "lucide-react";
import type { Repository } from "@/app/types/github";

interface RepositoryCardProps {
  repository: Repository;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <Link href={`/repository/${repository.owner.login}/${repository.name}`}>
      <Card className="hover:bg-accent transition-colors">
        <CardHeader>
          <CardTitle className="text-lg">{repository.full_name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            {repository.description || "No description available"}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {repository.language && (
              <div className="flex items-center">
                <CircleDot className="w-4 h-4 mr-1" />
                {repository.language}
              </div>
            )}
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {repository.stargazers_count.toLocaleString()}
            </div>
            <div className="flex items-center">
              <GitFork className="w-4 h-4 mr-1" />
              {repository.forks_count.toLocaleString()}
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {repository.watchers_count.toLocaleString()}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
